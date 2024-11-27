import { socialLinks } from '@/lib/content/portfolio';
import { SocialSectionType } from '@/lib/types/sections';

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
    {
      icon: 'simple-icons:leetcode',  // LeetCode icon added
      url: socialLinks.leetcode,  // Add your LeetCode link in socialLinks
    },
    {
      icon: 'ri:medium-line',  // Medium icon added
      url: socialLinks.medium,  // Add your Medium link in socialLinks
    },
  ],
};

