const Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setTitle('Here is your avatar!')
    .setColor(0xffa5f1)
    .setImage(`${message.member.user.avatarURL}`)
    message.channel.send(embed)
};
