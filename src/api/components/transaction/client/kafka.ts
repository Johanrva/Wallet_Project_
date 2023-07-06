import { EachMessagePayload, Kafka } from "kafkajs"
import logger from "../../../../utils/logger"
import { Transaction } from "../model"

export class KafkaClient {
    private kafka: Kafka
    private producer: any 
    private consumer: any

    constructor(){
        this.kafka = new Kafka({
            clientId: 'wallet',
            brokers: ["localhost:9092"]
        })
        this.producer = this.kafka.producer()
        this.consumer = this.kafka.consumer({groupId: 'newconsumer'})
    }

    async sendNotification (topic: string, message: Transaction) {
        try {
            const messageUpdate = Object.assign({}, message)
            messageUpdate.status = 'exitoso' 

            await this.producer.connect()
            await this.producer.send({
                topic,
                messages:[
                    {value: JSON.stringify(messageUpdate)}
                ]
            })

            await this.producer.disconnect()
            logger.info('Notificacion send succesfully')
        } catch (error) {
            logger.info('Failed to send Notification', error)
        }
        
    }

    async Listener (topic: string, processMessage: (message: string)=> void) {
        await this.consumer.connect()
        await this.consumer.subscribe({ topic: topic, fromBeginning: true})
        await this.consumer.run({
            eachMessage: async ({topic, partition, message}: EachMessagePayload) => {
                //console.log(`Partition: ${partition}`)
                //console.log(`Message: ${message.value?.toString()}`)
                const noti = message.value?.toString()
                processMessage((noti==undefined)?"":noti)
            }
        })

    }
}