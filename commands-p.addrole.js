const Discord = require ('discord.js');
module.exports.run = (client, message, args) => {
        if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("You don't have the `ADMINISTRATOR` permission therefore you cannot create a role!").then(msg => { msg.react("❌") });
        var role = message.content.split(" ").slice(1);
        message.guild.createRole({
            name: `${role}`,
            color: 'RANDOM',
        })
            .then(role => console.log(`Created role ${role}`))
            message.channel.send(`I have created a role named - ${role}`).then(msg => { msg.react("✅") })
            .catch(console.error)
    };
