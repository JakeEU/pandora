const Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
        if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("You don't have the `ADMINISTRATOR` permission therefore you cannot create a voice channel!").then(msg => { msg.react("❌") });
        var channel = message.content.split(" ").slice(1);
        message.guild.createChannel(`${channel}`, 'voice')
        .then(channel => console.log(`Created new channel ${channel}`))
        message.channel.send(`I have created a voice channel named - ${channel}`).then(msg => { msg.react("✅") })
        .catch(console.error);
    };
