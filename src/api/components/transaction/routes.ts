import { Router } from 'express'
import { TransactionController, TransactionControllerImp } from './controller' 
import { TransactionServiceImp } from './service'
import { TransactionRepository } from './repository'
import { WalletRepository } from '../wallet/repository'
import { WalletServiceImp } from '../wallet/service'

const router = Router()
const transactionRepository = new TransactionRepository()
const transactionService = new TransactionServiceImp(transactionRepository)
const walletRepository = new WalletRepository ()
const walletService = new WalletServiceImp (walletRepository)



const transactionController : TransactionController = new TransactionControllerImp(transactionService, walletService)

// Create Transaction
router.post('/create', transactionController.createTx.bind(transactionController))
// Update Transaction
router.patch('/:id_tx/update')
// List Transactions
router.get('/list', transactionController.getAllTransactions.bind(transactionController))
// Get transaction by id
router.get('/:tx_id', transactionController.getTransactionById.bind(transactionController))


export default router
