const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: process.env.token });

manager.spawn();
manager.on('launch', shard => console.log(`Launched shard ${shard.id}`));