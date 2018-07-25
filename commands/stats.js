const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'stats',
    description: 'Server stats.',
    async execute(message) {
        return client.shard.broadcastEval('this.guilds.size')
			.then(results => {
				return message.channel.send(`Server count: ${results.reduce((prev, val) => prev + val, 0)}`);
			})
			.catch(console.error);
        
    },
};