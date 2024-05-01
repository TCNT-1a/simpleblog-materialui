export type menuItem = {
  action: () => void;
  title: string;
  href: string;
  icon: React.ReactNode;
  id: number;
};
