import { Router } from 'express'
import { WalletController, WalletControllerImp } from './controller'
import { WalletServiceImp } from './service'
import { WalletRepository } from './repository'

const router = Router()
const walletRepository : WalletRepository = new WalletRepository ()
const walletService : WalletServiceImp = new WalletServiceImp (walletRepository)
const walletController : WalletController = new WalletControllerImp (walletService)

// Create Wallet
router.post('/create', walletController.createWallet.bind(walletController))
// Recharge Wallet
router.patch('/:wallet_id/recharge')
// Refund Wallet
router.post('/:wallet_id/refund')
// Tx amount limit
router.post('/:wallet_id/limit')

export default router