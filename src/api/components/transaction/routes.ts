import { Router } from 'express'
import { TransactionController, TransactionControllerImp } from './controller' 
import { TransactionServiceImp } from './service'
import { TransactionRepository } from './repository'

const router = Router()
const transactionRepository = new TransactionRepository()
const transactionService = new TransactionServiceImp(transactionRepository)
const transactionController : TransactionController = new TransactionControllerImp(transactionService)

// Create Transaction
router.post('/create',)
// Update Transaction
router.patch('/:id_tx/update')
// List Transactions
router.get('/list', transactionController.getAllTransactions.bind(transactionController))
// Get transaction by id
router.get('/:tx_id', transactionController.getTransactionById.bind(transactionController))


export default router
