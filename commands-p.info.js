const Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
    let user = message.mentions.users.first();
    const uinfo = new Discord.RichEmbed()
    .setColor(0xffa5f1)
    .setAuthor(`Essential information for ${user.username}`, user.displayAvatarURL)
    .setImage(user.displayAvatarURL)
    .setFooter(`This info is for ${user.username}`, user.displayAvatarURL)
    .addField(`Info for ${user.username}`, `**Users Name** ${user.username}\n**User ID**: ${user.id}\n**User Status**: ${user.presence.status}\n**Joined discord at:** ${user.createdAt}`)
    message.channel.send({embed: uinfo})
};
