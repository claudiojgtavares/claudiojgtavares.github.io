export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  image?: string;
  titleEn?: string;
  issuerEn?: string;
};

// Add only certificates that are real and already completed. Keep empty until then.
export const certificates: Certificate[] = [];
