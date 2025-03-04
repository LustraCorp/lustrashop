import { Request, Response } from 'express';
import ProductService from '../services/product-service';

const productService = new ProductService();

async function getProduct(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  try {
    const product = await productService.getProductById(id);
    res.json(product);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
}

export { getProduct };
