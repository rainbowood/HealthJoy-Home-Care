import { NavLink, Service, TeamMember, Value } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Caregivers', path: '/caregivers' },
  { name: 'Support', path: '/support-at-home' },
  { name: 'Quality', path: '/compliance' },
  { name: 'Career', path: '/careers' },
  { name: 'Links', path: '/links' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'personal-care',
    title: 'Personal Care',
    description: 'Assistance with daily living activities including hygiene, dressing, and mobility to maintain confidence and well-being.',
    icon: 'UserCheck',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCI0rbTW7kpi0xS_F9ssd5Lb42KL0tVbcAju4r3EEUudC4kcu4VXcUzNnzPZIgI5QouAQ6lMW5CN0o4L8kDB06zV3pE9LLffF31K9eXT0QBPOP_jDlEHG-u8Gi5TvhsuC7O1x1M8D9wK0UiPHGHwDXFpHZ5TkFZKqNokO08bKoHwd00L5VSUjVAi1wr50LqHP_4sr4qb08c5tBFSNYUdjxt786o1_Ol10n_lU9nBlyPmak7eoQROsfzdUkWX5a6x0fjM1_C_DdzrTB-'
  },
  {
    id: 'domestic-assistance',
    title: 'Domestic Assistance',
    description: 'Helping with household chores, laundry, meal preparation, and maintaining a clean, safe living environment.',
    icon: 'Home',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJC7Cm5kA84WvdQaf9J5_caozTdQ2LQxC7ceoDyGbHRYuQgjylMvSJQY5Dg-H7wWjhtyTNoPzPkUxQORgjebDAMd-Z0awmX95C4MhIMzvwlrnfWWSsj7VJ8ovWKPGD9efYPzHH_6AWbsnKAhvyfZNJMq9NA0-SbIvxpZUIVQyGb1K9ra2dOB8uHlrBR6-DeDarxCEuIc7ymUWvO8g1hiCIESWqVsdzb9pMiReUpbWgFr3gAY5HkleeT05eiUAbXysZ5MaztifC1vOz'
  },
  {
    id: 'social-support',
    title: 'Social Support',
    description: 'Providing companionship and support for social activities to help clients stay connected and engaged with their community.',
    icon: 'Users',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf4GoWaRwzQXqiaNUtsdPMAlVXK05zasW2dR6Kt9Ys7MX3TsUSZtsozx2wf58E2dX75vCL5V3Vr9xm2T60Wtir39spTk2S8XnBZBH40utV6_VFl2cork3fE05JsEKKU_jlACMvyav5Nl_Wgif-oELlTP-6dwvaomi4Vnjhkq2xDeVs5qYUoGI4QB6tbzbUciWtmIQirLrBnK3xzTpdUNz02DfxSZsBCKVY_FP94FUyDNIlj9l982nH1vqVhZH4eBCze0hzMbv_MpP_'
  },
  {
    id: 'allied-health',
    title: 'Allied Health',
    description: 'Specialized therapeutic services including physiotherapy, occupational therapy, and other healthcare supports tailored to your needs.',
    icon: 'Accessibility',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_o7QkD8VfOkwBWcL7htsva-9X6WY4G_xC5YicP8pXJyu13J4SVGLI_WTMrUXlYl2BecP_IuGfvNaQKSE7ZzQrkG_OU_ddFDW244AO9qxSfbLyQBkAVIoCRgq3qrwooayEw0zZfiWm6gQI7dxyIlbcAExqyrSUBJceLtr4N1O4fawTaxLf_1zqvJ1AEKd4TFxpBC4cK-eWkJrxXlMjMj1A8xohGVO7nhcz3KCZWK9MnasZQ-9h4L1TWdpvbBPptJGbU1--jONzexIP'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'James C.',
    role: 'Operating Manager',
    description: 'Ensures seamless coordination between our families and our team of skilled caregivers.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWdGYY32y14eIGrRWpd4Pqed3mhPKyfln5wuh7m-J5N0mV_AhEZCTcCD2RdaOThSLYiE903cFozrz3a4A8CU6SUX062xnc3WCEn_OWkBndt9mJFqhqch0qTGGQSJkOF3ha9JPc2our1RcbJf2NfHKAMuBqWAXb9oR8S4twYonyjbUqdpRhE_VtJF8KvnrhctoHquse80Eylzp4ghqrYX07ZHs6I7yz8lGsBqaoQ1CRWiiVyz_x61Kakg6HTNRGF0lo_zseXg1bi5Zr',
  },
  {
    name: 'Dr. Tsing L.',
    role: 'Head of Advisory',
    description: 'Over 20 years of experience in geriatric medicine and community healthcare leadership.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvqH8Lw_jzxM3BO68nY7aA4ST3ejkjDl0Ewtmoco7woQMeVOqMMLsIE2C6BYAyY6nlYcpew2G3RQgNXC3ciPbq8YQT_1MmEd41rzAP_LXN4AVNkCdzK6LyEdGp4uBwa4TvaK9DvxZUBB64t_bbrTnnNX3prOltYr5i9_adgj92pXjYyx5zALrGKy50kw34LIh8oRvHlzPAuCccs1DCK9u-iSzK7KTJg3yoX3sKWV6DMEpuwy7IpuJbSTxcOYG9DlzBikhA4RCoJ5LT',
  },
  {
    name: 'Selina Y.',
    role: 'Financial Manager',
    description: 'Expert in strategic financial planning and healthcare management, ensuring long-term stability and excellence for our families.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI94C2YjYMo_6O9VfenJPErbVMkjM78jhWWzlqvCHMv3LOxuNiL2UiEXzclOMMXnQtn-XpB-AgvgKWOAsQwQUQXAFgvhc_wnAH4yF7XJ14f7hHQV30VVOzPSBztvuZbwqeGEhpioC40FwWXbYKKWSXA-QEpu3bK-sXxNjBkm2vKoEs6nQpV4Ihu080F_DaNV7T_VBCej6usL_-YTCCQK9weKe3COKANyiZrWI_zYxTgxGKvm9DJaGngfAyJA0rPWg81PKb0nARdqzs',
  },
];

export const VALUES: Value[] = [
  {
    title: 'Compassion',
    description: 'We lead with heart in everything we do, treating every client with the same warmth we would give our own parents.',
    icon: 'Heart',
  },
  {
    title: 'Integrity',
    description: 'Honesty and transparency are our foundation. We believe that trust is earned through consistent, ethical actions every day.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Excellence',
    description: 'Setting the highest standards for home care through continuous training, professional growth, and attention to detail.',
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
