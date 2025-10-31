export interface CareerOption {
  title: string;
  description: string;
  color: string;
}

export interface CareerSectionProps {
  careerQuote: string;
  careerOptions: CareerOption[];
}