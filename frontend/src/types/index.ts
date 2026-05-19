export interface PortfolioItemProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface PortfolioData {
  items: PortfolioItemProps[];
}