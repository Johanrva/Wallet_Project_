import Joi from 'joi'
import { WalletDBRes } from '../model'

const rechargeWalletSchema = Joi.object({
    wallet_id : Joi.number().required(),
})

function rechargeValidation(reqBody: Object , walletDBRes : WalletDBRes) {
    const {error, value} = rechargeWalletSchema.validate(reqBody)
}
export { rechargeWalletSchema }
