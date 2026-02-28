import { NavLink, Service, TeamMember, Value } from './types';
import assistiveTechImg from './assets/images/assistive-tech.png';
import homeModsImg from './assets/images/home-mods.png';
import annieAvatarImg from './assets/images/annie-avatar.png';

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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCI0rbTW7kpi0xS_F9ssd5Lb42KL0tVbcAju4r3EEUudC4kcu4VXcUzNnzPZIgI5QouAQ6lMW5CN0o4L8kDB06zV3pE9LLffF31K9eXT0QBPOP_jDlEHG-u8Gi5TvhsuC7O1x1M8D9wK0UiPHGHwDXFpHZ5TkFZKqNokO08bKoHwd00L5VSUjVAi1wr50LqHP_4sr4qb08c5tBFSNYUdjxt786o1_Ol10n_lU9nBlyPmak7eoQROsfzdUkWX5a6x0fjM1_C_DdzrTB-'
  },
  {
    id: 'domestic-assistance',
    title: 'services.domesticAssistance.title',
    description: 'services.domesticAssistance.desc',
    icon: 'Home',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJC7Cm5kA84WvdQaf9J5_caozTdQ2LQxC7ceoDyGbHRYuQgjylMvSJQY5Dg-H7wWjhtyTNoPzPkUxQORgjebDAMd-Z0awmX95C4MhIMzvwlrnfWWSsj7VJ8ovWKPGD9efYPzHH_6AWbsnKAhvyfZNJMq9NA0-SbIvxpZUIVQyGb1K9ra2dOB8uHlrBR6-DeDarxCEuIc7ymUWvO8g1hiCIESWqVsdzb9pMiReUpbWgFr3gAY5HkleeT05eiUAbXysZ5MaztifC1vOz'
  },
  {
    id: 'social-support',
    title: 'services.socialSupport.title',
    description: 'services.socialSupport.desc',
    icon: 'Users',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf4GoWaRwzQXqiaNUtsdPMAlVXK05zasW2dR6Kt9Ys7MX3TsUSZtsozx2wf58E2dX75vCL5V3Vr9xm2T60Wtir39spTk2S8XnBZBH40utV6_VFl2cork3fE05JsEKKU_jlACMvyav5Nl_Wgif-oELlTP-6dwvaomi4Vnjhkq2xDeVs5qYUoGI4QB6tbzbUciWtmIQirLrBnK3xzTpdUNz02DfxSZsBCKVY_FP94FUyDNIlj9l982nH1vqVhZH4eBCze0hzMbv_MpP_'
  },
  {
    id: 'allied-health',
    title: 'services.alliedHealth.title',
    description: 'services.alliedHealth.desc',
    icon: 'Accessibility',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_o7QkD8VfOkwBWcL7htsva-9X6WY4G_xC5YicP8pXJyu13J4SVGLI_WTMrUXlYl2BecP_IuGfvNaQKSE7ZzQrkG_OU_ddFDW244AO9qxSfbLyQBkAVIoCRgq3qrwooayEw0zZfiWm6gQI7dxyIlbcAExqyrSUBJceLtr4N1O4fawTaxLf_1zqvJ1AEKd4TFxpBC4cK-eWkJrxXlMjMj1A8xohGVO7nhcz3KCZWK9MnasZQ-9h4L1TWdpvbBPptJGbU1--jONzexIP'
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
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'mental-health',
    title: 'services.mentalHealth.title',
    description: 'services.mentalHealth.desc',
    icon: 'Brain',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop'
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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWdGYY32y14eIGrRWpd4Pqed3mhPKyfln5wuh7m-J5N0mV_AhEZCTcCD2RdaOThSLYiE903cFozrz3a4A8CU6SUX062xnc3WCEn_OWkBndt9mJFqhqch0qTGGQSJkOF3ha9JPc2our1RcbJf2NfHKAMuBqWAXb9oR8S4twYonyjbUqdpRhE_VtJF8KvnrhctoHquse80Eylzp4ghqrYX07ZHs6I7yz8lGsBqaoQ1CRWiiVyz_x61Kakg6HTNRGF0lo_zseXg1bi5Zr',
  },
  {
    name: 'Dr. Tsing L.',
    role: 'team.tsing.role',
    description: 'team.tsing.desc',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvqH8Lw_jzxM3BO68nY7aA4ST3ejkjDl0Ewtmoco7woQMeVOqMMLsIE2C6BYAyY6nlYcpew2G3RQgNXC3ciPbq8YQT_1MmEd41rzAP_LXN4AVNkCdzK6LyEdGp4uBwa4TvaK9DvxZUBB64t_bbrTnnNX3prOltYr5i9_adgj92pXjYyx5zALrGKy50kw34LIh8oRvHlzPAuCccs1DCK9u-iSzK7KTJg3yoX3sKWV6DMEpuwy7IpuJbSTxcOYG9DlzBikhA4RCoJ5LT',
  },
  {
    name: 'Selina Y.',
    role: 'team.selina.role',
    description: 'team.selina.desc',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI94C2YjYMo_6O9VfenJPErbVMkjM78jhWWzlqvCHMv3LOxuNiL2UiEXzclOMMXnQtn-XpB-AgvgKWOAsQwQUQXAFgvhc_wnAH4yF7XJ14f7hHQV30VVOzPSBztvuZbwqeGEhpioC40FwWXbYKKWSXA-QEpu3bK-sXxNjBkm2vKoEs6nQpV4Ihu080F_DaNV7T_VBCej6usL_-YTCCQK9weKe3COKANyiZrWI_zYxTgxGKvm9DJaGngfAyJA0rPWg81PKb0nARdqzs',
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
  wechatQR: 'https://i.postimg.cc/tTM02s5P/Wechat-code.jpg',
};
