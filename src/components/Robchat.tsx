import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Mic, Send, X, Loader2 } from 'lucide-react';
import { submitRobchatMessage } from '../api';
import { useTranslation } from 'react-i18next';

export const Robchat: React.FC = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [recordingTime, setRecordingTime] = useState(0);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<BlobPart[]>([]);
    const timerRef = useRef<number | null>(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                setAudioBlob(audioBlob);
                stream.getTracks().forEach((track) => track.stop());
            };

            mediaRecorder.start();
            setIsRecording(true);
            setRecordingTime(0);
            timerRef.current = window.setInterval(() => {
                setRecordingTime((prev) => prev + 1);
            }, 1000);
        } catch (error) {
            console.error('Error accessing microphone:', error);
            setStatus('error');
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        }
    };

    const cancelRecording = () => {
        setAudioBlob(null);
        setRecordingTime(0);
    };

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!message.trim() && !audioBlob) return;

        setStatus('submitting');
        const formData = new FormData();
        if (message.trim()) formData.append('message', message.trim());
        if (audioBlob) formData.append('audio', audioBlob, 'voice_message.webm');

        try {
            await submitRobchatMessage(formData);
            setStatus('success');
            setMessage('');
            setAudioBlob(null);
            setTimeout(() => {
                setStatus('idle');
                setIsOpen(false);
            }, 3000);
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <>
            {/* Floating Action Button */}
            <button
                onClick={toggleChat}
                className="fixed bottom-6 right-6 w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 hover:scale-105 transition-all z-50 group"
                aria-label="Open Robchat"
            >
                <MessageSquare size={28} className="group-hover:animate-pulse" />
                {/* Notification dot */}
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
            </button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-28 right-6 w-[360px] max-h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col font-sans border border-slate-100"
                    >
                        {/* Header */}
                        <div className="bg-blue-600 p-5 text-white flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-lg">Robchat Support</h3>
                                <p className="text-blue-100 text-xs">Send a message to WeChat Support</p>
                            </div>
                            <button
                                onClick={toggleChat}
                                className="text-blue-100 hover:text-white transition-colors"
                                aria-label="Close chat"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Chat Body (Status messages) */}
                        <div className="flex-grow p-6 bg-slate-50 flex flex-col items-center justify-center min-h-[200px]">
                            {status === 'success' ? (
                                <div className="text-center text-emerald-600">
                                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Send size={24} />
                                    </div>
                                    <p className="font-bold">Message Sent!</p>
                                    <p className="text-sm text-slate-500 mt-1">We will respond shortly.</p>
                                </div>
                            ) : status === 'error' ? (
                                <div className="text-center text-red-600">
                                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <X size={24} />
                                    </div>
                                    <p className="font-bold">Failed to send</p>
                                    <p className="text-sm text-slate-500 mt-1">Please try again later.</p>
                                </div>
                            ) : (
                                <div className="text-center text-slate-400">
                                    <MessageSquare size={40} className="mx-auto mb-3 opacity-20" />
                                    <p className="text-sm">Type a message or send a voice note.</p>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-slate-100">
                            {audioBlob ? (
                                <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-xl mb-3">
                                    <div className="flex-grow text-sm text-blue-800 font-medium">
                                        Audio Recorded ({formatTime(recordingTime)})
                                    </div>
                                    <button onClick={cancelRecording} className="text-red-500 hover:text-red-600 p-1">
                                        <X size={16} />
                                    </button>
                                    <button
                                        onClick={() => handleSubmit()}
                                        disabled={status === 'submitting'}
                                        className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                                    >
                                        {status === 'submitting' ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex items-end gap-2">
                                    <div className="relative flex-grow">
                                        <textarea
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Type here..."
                                            className="w-full bg-slate-100 border-none rounded-2xl py-3 pl-4 pr-12 text-sm focus:ring-0 resize-none h-[50px] max-h-[120px]"
                                            rows={1}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' && !e.shiftKey) {
                                                    e.preventDefault();
                                                    handleSubmit();
                                                }
                                            }}
                                        />
                                        <button
                                            type="button"
                                            onMouseDown={startRecording}
                                            onMouseUp={stopRecording}
                                            onMouseLeave={stopRecording}
                                            className={`absolute right-2 bottom-2 p-2 rounded-full transition-colors ${isRecording ? 'bg-red-500 text-white animate-pulse' : 'text-slate-400 hover:text-blue-600'
                                                }`}
                                            title="Hold to record audio"
                                        >
                                            <Mic size={18} />
                                        </button>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={!message.trim() || status === 'submitting'}
                                        className="bg-blue-600 text-white p-3.5 rounded-2xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:bg-slate-300"
                                    >
                                        {status === 'submitting' ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                                    </button>
                                </form>
                            )}
                            {isRecording && (
                                <div className="text-xs text-center text-red-500 font-medium mt-2 animate-pulse">
                                    Recording: {formatTime(recordingTime)}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
