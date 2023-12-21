import { Router } from 'express';
import { body } from 'express-validator'
import { handleInputErrors } from './modules/middleware';
import { getProducts, getOneProduct, createProduct, updateProduct, deleteProduct } from './handlers/product';

const router = Router();

// Product
router.get('/product', getProducts)
router.post('/product', body('name').isString(), handleInputErrors, createProduct)
router.get('/product/:id', getOneProduct)
router.put('/product/:id', body('name').isString(), handleInputErrors, updateProduct)
router.delete('/product/:id', deleteProduct)

// Update
router.get('/update', ()=> {})
router.post('/update',
    body('title').exists().isString(),
    body('body').exists().isString(),
    ()=> {}
)
router.get('/update/:id', ()=> {})
router.put('/update/:id',
    body('title').optional(),
    body('body').optional(),
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
    body('version').optional(),
    ()=> {}
)
router.delete('/update/:id', ()=> {})

// Update points
router.get('/updatepoint', ()=> {})
router.post('/updatepoint',
    body('name').isString(),
    body('description').isString(),
    body('updateId').exists().isString(),
    () => {}
)
router.get('/updatepoint/:id', ()=> {})
router.put('/updatepoint/:id',
    body('name').optional().isString(), 
    body('description').optional().isString(), 
    ()=> {}
)
router.delete('/updatepoint/:id', ()=> {})


export default router;