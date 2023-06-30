import { Request, Response } from "express"
import { WalletService, WalletServiceImp } from "./service"


export interface WalletController {
    createWallet (req: Request, res: Response) : void 
    rechargeWallet (req: Request , res: Response) : void
}

export class WalletControllerImp implements WalletController {
    private walletService: WalletService

    constructor(walletService:WalletService) {
        this.walletService = walletService
    }

    public createWallet(req: Request, res: Response) : void {
        const bodyReq = req.body

        this.walletService.getWalletByUserId(bodyReq.user_id)
        .then(
            (user) => {
                res.status(400).json({
                    type: "walletCreate",
                    message: "User id already have wallet"
                })   
            }, 
            (error) => {
                this.walletService.createWallet(bodyReq)
                .then(
                    (wallet) => {
                        res.status(201).json(wallet)
                    },
                    (error) => {
                        res.status(400).json({
                            type: error.name,
                            message: "failed Creating a Wallet"
                        })
                    }
                )
            }

        )

    }   

    public rechargeWallet (req: Request , res: Response) : void {
        const bodyReq = req.body
        // Validar que wallet existe
        // Validar que status sea active
        // Validar que amount no supere el maximo de 5M
    }
        
}