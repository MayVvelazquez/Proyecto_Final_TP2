import { body, validationResult} from "express-validator";

export const validateProducto = [
  body('name').notEmpty().withMessage('El nombre no puede estar vacío'),
  body('description').notEmpty().withMessage('La descripción no puede estar vacía'),
  body('stock')
    .notEmpty().withMessage('El stock no puede estar vacío')
    .isNumeric().withMessage('El stock debe ser un número')
    .isInt({ min: 1 }).withMessage('El stock debe ser un número entero positivo'),
  body('price')
    .notEmpty().withMessage('El precio no puede estar vacío')
    .isNumeric().withMessage('El precio debe ser un número'),
  
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()});
    }
    next();
  }
];

export default validateProducto;