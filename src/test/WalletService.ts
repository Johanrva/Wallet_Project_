// import { Request, Response} from "express"
// import { WalletController, WalletControllerImp } from "../api/components/wallet/controller"
// import { WalletService } from "../api/components/wallet/service"
// import { describe } from "node:test"
// import { WalletCreateReq, WalletCreateRes, WalletDBInsert, WalletDBRes } from "../api/components/wallet/model"


// const mockReq = {} as Request
// const mockRes = {} as Response

// describe('WalletController', () => {
//     let walletService: WalletService
//     let walletController : WalletController

//     beforeEach(()=>{
//         walletService = {
//             createWallet: jest.fn(),
//             getWalletByUserId: jest.fn(),
//             getWalletById: jest.fn(),
//             rechargeWallet: jest.fn(),
//             limitTxAmountWallet: jest.fn()
//         }

//         walletController = new WalletControllerImp (walletService)
//         mockRes.status = jest.fn().mockReturnThis()
//         mockRes.json = jest.fn().mockReturnThis()
//     })

//     describe('createWallet', ()=>{
//         it('should create new wallet and return info', async () => {
//             const walletRes: WalletCreateRes = {
//                 wallet_id: 1,
//                 user_id: 1,
//                 wallet_status: 'Active',
//                 transaction_min_amount: 2000
//             }
//             const walletReq : WalletCreateReq = {
//                 user_id:1
//             };

//             const walletResService: WalletDBRes = {
//                 wallet_id: 1,
//                 user_id: 1,
//                 min_amount: 2000,
//                 max_amount: 5000000,
//                 amount: 0,
//                 status: 'Active',
//                 created_at: new Date(),
//                 updated_at: new Date()
//             }

//             const walletInsert: WalletDBInsert = {
//                 user_id: 1,
//                 min_amount: 2000,
//                 status: "Active",
//                 created_at: new Date (),
//                 updated_at: new Date ()
//             };
//             (mockReq.body as WalletCreateReq) = walletReq;
//             (walletService.createWallet as jest.Mock).mockRejectedValue(walletResService)

//             await walletController.createWallet(mockReq, mockRes)

//             expect(walletService.createWallet).toHaveBeenCalledWith(walletInsert)
//             expect(mockRes.json).toHaveBeenCalledWith(walletRes)
//             expect(mockRes.status).toHaveBeenCalledWith(201)
//         })

//     })
// })