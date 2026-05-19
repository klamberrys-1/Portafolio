export class PortfolioService {
    private portfolioItems: PortfolioItem[] = [];

    public getPortfolioItems(): PortfolioItem[] {
        return this.portfolioItems;
    }

    public addPortfolioItem(item: PortfolioItem): void {
        this.portfolioItems.push(item);
    }

    public updatePortfolioItem(id: string, updatedItem: PortfolioItem): void {
        const index = this.portfolioItems.findIndex(item => item.id === id);
        if (index !== -1) {
            this.portfolioItems[index] = updatedItem;
        }
    }

    public deletePortfolioItem(id: string): void {
        this.portfolioItems = this.portfolioItems.filter(item => item.id !== id);
    }
}