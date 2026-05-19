export class PortfolioController {
    constructor(private portfolioService: PortfolioService) {}

    async getPortfolioItems(req, res) {
        try {
            const items = await this.portfolioService.getAllItems();
            res.status(200).json(items);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching portfolio items' });
        }
    }

    async updatePortfolioItem(req, res) {
        const { id } = req.params;
        const updatedData = req.body;

        try {
            const updatedItem = await this.portfolioService.updateItem(id, updatedData);
            res.status(200).json(updatedItem);
        } catch (error) {
            res.status(500).json({ message: 'Error updating portfolio item' });
        }
    }
}