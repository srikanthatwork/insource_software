export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface IndustriesServedProps {
  title?: string;
  industries?: Industry[];
}
