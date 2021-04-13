import { Router } from 'express'
const router = Router();

import { createSupport, getSupportsByUser, getSupportSup, updateSuportSup, deleteSupport, getSupportById, getSupportByTittle } from '../controllers/support.controller'

// Routes
//router.post('/createsup', createSupport);
//router.put('/:id', updateSuportSup);
//router.delete('/:id', deleteSupport);
//router.get('/support/:id', getSupportById);
//router.get('/supporter', getSupportSup);

router.get('/tittle/:tittle', getSupportByTittle);
router.get('/user/:iduser', getSupportsByUser);
router.route('/').post(createSupport).get(getSupportSup);
router.route('/:id').put(updateSuportSup).delete(deleteSupport).get(getSupportById);


export default router;