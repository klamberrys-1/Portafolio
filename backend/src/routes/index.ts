import { Router } from 'express';
import { PortfolioController } from '../controllers/portfolioController';

const router = Router();
const portfolioController = new PortfolioController();

export function setRoutes(app) {
  app.use('/api/portfolio', router);
  
  router.get('/', portfolioController.getAllPortfolioItems);
  router.post('/', portfolioController.createPortfolioItem);
  router.put('/:id', portfolioController.updatePortfolioItem);
  router.delete('/:id', portfolioController.deletePortfolioItem);
}