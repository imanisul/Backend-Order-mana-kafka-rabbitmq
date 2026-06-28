const {getChannel} = require('../config/rabbitmq.js');

const startConsumer = async () => {
    const channel = getChannel();

    channel.consume('orderQueue', (message) => {
        const order = JSON.parse(
            message.content.toString()
        );

        console.log('New Order Recieved');
        console.log(order);

        channel.ack(message);
        
        
    });
};

module.exports = {startConsumer};