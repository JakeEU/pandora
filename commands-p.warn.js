const Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the permission `MANAGE_MESSAGES` Therefore i couldn't execute this command!").then(msg => { msg.react("❌") });
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("I dont have the `MANAGE_MESSAGES` permission! Thats why i can't warn!").then(msg => { msg.react("❌") });
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ")
    let modlog = message.guild.channels.find("name", "mod-log");

    if (!modlog) return message.reply("It seems this server doesn't have a mod-log channel!");
    if (message.mentions.users.size < 1) return message.reply("You didnt mention a user to warn!").then(msg => { msg.react("❌") });
    if (!reason) return message.reply("I can't warn without a reason!").then(msg => { msg.react("❌") });
    if (!message.guild.member(user)
    .bannable) return message.reply("I cannot warn this member!").then(msg => { msg.react("❌") });

    message.channel.send(`✅ The warn information for **${user.username}** has been sent to mod-log!`)
    
    const kickembed = new Discord.RichEmbed()
    .setColor(0xf4c842)
    .setAuthor(`${user.username}`, user.displayAvatarURL)
    .addField("Warn Information", `**Action:** Warn\n**Warned User:** ${user.username}\n**Moderator:** ${message.author}\n**Reason**: ${reason}\n`)
    modlog.send({ 
        embed : kickembed
    })
};
