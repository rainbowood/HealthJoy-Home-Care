import { NavLink, Service, TeamMember, Value } from './types';
import assistiveTechImg from './assets/images/assistive-tech.png';
import homeModsImg from './assets/images/home-mods.png';
import annieAvatarImg from './assets/images/annie-avatar.png';
import personalCareImg from './assets/images/personal-care.png';
import domesticAssistanceImg from './assets/images/domestic-assistance.png';
import socialSupportImg from './assets/images/social-support.png';
import alliedHealthImg from './assets/images/allied-health.png';
import healthWellnessImg from './assets/images/health-wellness.jpg';
import mentalHealthImg from './assets/images/mental-health.jpg';
import jamesCImg from './assets/images/james-c.png';
import tsingLImg from './assets/images/tsing-l.png';
import selinaYImg from './assets/images/selina-y.png';
import wechatQRImg from './assets/images/wechat-qr.jpg';

export const NAV_LINKS: NavLink[] = [
  { name: 'nav.home', path: '/' },
  { name: 'nav.about', path: '/about' },
  { name: 'nav.services', path: '/services' },
  { name: 'nav.caregivers', path: '/caregivers' },
  { name: 'nav.support', path: '/support-at-home' },
  { name: 'nav.quality', path: '/compliance' },
  { name: 'nav.career', path: '/careers' },
  { name: 'nav.links', path: '/links' },
  { name: 'nav.contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'personal-care',
    title: 'services.personalCare.title',
    description: 'services.personalCare.desc',
    icon: 'UserCheck',
    image: personalCareImg
  },
  {
    id: 'domestic-assistance',
    title: 'services.domesticAssistance.title',
    description: 'services.domesticAssistance.desc',
    icon: 'Home',
    image: domesticAssistanceImg
  },
  {
    id: 'social-support',
    title: 'services.socialSupport.title',
    description: 'services.socialSupport.desc',
    icon: 'Users',
    image: socialSupportImg
  },
  {
    id: 'allied-health',
    title: 'services.alliedHealth.title',
    description: 'services.alliedHealth.desc',
    icon: 'Accessibility',
    image: alliedHealthImg
  },
  {
    id: 'assistive-technology',
    title: 'services.assistiveTechnology.title',
    description: 'services.assistiveTechnology.desc',
    icon: 'Settings',
    image: assistiveTechImg
  },
  {
    id: 'home-modifications',
    title: 'services.homeModifications.title',
    description: 'services.homeModifications.desc',
    icon: 'Wrench',
    image: homeModsImg
  },
  {
    id: 'health-wellness',
    title: 'services.healthWellness.title',
    description: 'services.healthWellness.desc',
    icon: 'Heart',
    image: healthWellnessImg
  },
  {
    id: 'mental-health',
    title: 'services.mentalHealth.title',
    description: 'services.mentalHealth.desc',
    icon: 'Brain',
    image: mentalHealthImg
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Annie S.',
    role: 'team.annie.role',
    description: 'team.annie.desc',
    image: annieAvatarImg,
  },
  {
    name: 'James C.',
    role: 'team.james.role',
    description: 'team.james.desc',
    image: jamesCImg,
  },
  {
    name: 'Dr. Tsing L.',
    role: 'team.tsing.role',
    description: 'team.tsing.desc',
    image: tsingLImg,
  },
  {
    name: 'Selina Y.',
    role: 'team.selina.role',
    description: 'team.selina.desc',
    image: selinaYImg,
  },
];

export const VALUES: Value[] = [
  {
    title: 'values.compassion.title',
    description: 'values.compassion.desc',
    icon: 'Heart',
  },
  {
    title: 'values.integrity.title',
    description: 'values.integrity.desc',
    icon: 'ShieldCheck',
  },
  {
    title: 'values.excellence.title',
    description: 'values.excellence.desc',
    icon: 'Star',
  },
];

export const CONTACT_INFO = {
  phone: '0493-334-910',
  email: 'info@healthjoy.com.au',
  address: 'PL 1028188768, 18 Hannah St, Beecroft, NSW 2119',
  wechatId: 'HealthJoy_Care',
  wechatQR: wechatQRImg,
};
