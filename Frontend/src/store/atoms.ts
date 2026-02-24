import { atom } from 'recoil';

export const themeState = atom({
  key: 'themeState',
  default: 'dark' as 'light' | 'dark',
});

export const contactFormState = atom({
  key: 'contactFormState',
  default: {
    name: '',
    email: '',
    message: '',
  },
});

export const activeSection = atom({
  key: 'activeSection',
  default: 'hero',
});