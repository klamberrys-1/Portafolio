export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PortfolioData {
  items: PortfolioItem[];
}