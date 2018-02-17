const Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
        if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("You don't have the permission `BAN_MEMBERS` Therefore i couldn't execute this command!").then(msg => { msg.react("❌") });
        if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("I dont have the `BAN_MEMBERS` permission! Thats why i can't ban!").then(msg => { msg.react("❌") });
        let user = message.mentions.users.first();
        let reason = message.content.split(" ").slice(2).join(" ")
        let modlog = message.guild.channels.find("name", "mod-log");
    
        if (!modlog) return message.reply("It seems this server doesn't have a mod-log channel!");
        if (message.mentions.users.size < 1) return message.reply("You didnt mention a user to ban!").then(msg => { msg.react("❌") });
        if (!reason) return message.reply("I can't ban without a reason!").then(msg => { msg.react("❌") });
        if (!message.guild.member(user)
        .bannable) return message.reply("I cannot ban this member!").then(msg => { msg.react("❌") });
    
        message.guild.member(user).ban(); message.channel.send(` ✅ Sucsess! ${message.author} i have banned ${user.username} from **${message.guild.name}** for ${reason}`);
    
        const kickembed = new Discord.RichEmbed()
        .setColor(0xe51212)
        .setAuthor(`${user.username}`, user.displayAvatarURL)
        .addField("Ban Information", `**Action:** Ban\n**Banned User:** ${user.username}\n**Moderator** ${message.author}\n**Reason**: ${reason}\n`)   
        modlog.send({ 
            embed : kickembed
      })
   }
