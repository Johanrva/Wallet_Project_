import Joi from 'joi'
import { WalletDBRes } from '../model'

const rechargeWalletSchema = Joi.object({
    amount : Joi.number().required(),
})

function rechargeValidation(reqBody: Object, type : string, walletDBRes?: WalletDBRes ) {
    const {error, value } = rechargeWalletSchema.validate(reqBody)
    if (error) {
        return error
    }
    if (walletDBRes){
        if (walletDBRes.status != "Active"){
            return {
                details:[{ message : "wallet does not active"}]
            }
        }
        
        if ( walletDBRes.amount + value.amount > 5000000 && type == 'Recharge'){
            return {
                details:[{ message : "Ammount to recharge wallet is too high"}]
            }
        }
    } else {
        return {
            details:[{ message : "wallet does not exist"}]
        }
    }
}

export { rechargeWalletSchema, rechargeValidation }
