const API_BASE = '/api';

interface ApiResponse {
    message?: string;
    error?: string;
    data?: any;
}

async function postJson(url: string, body: Record<string, any>): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE}${url}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
    const json = await res.json();
    if (!res.ok) {
        throw new Error(json.error || 'Something went wrong.');
    }
    return json;
}

export async function submitContact(data: {
    full_name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}) {
    return postJson('/contact', data);
}

export async function submitGetStarted(data: {
    care_for: string;
    support_type: string;
    best_time: string;
    full_name: string;
    phone: string;
}) {
    return postJson('/get-started', data);
}

export async function submitApplication(data: FormData) {
    const res = await fetch(`${API_BASE}/apply`, {
        method: 'POST',
        body: data,
    });
    const json = await res.json();
    if (!res.ok) {
        throw new Error(json.error || 'Something went wrong.');
    }
    return json;
}
