const Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
        if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You don't have the permission `KICK_MEMBERS` Therefore i couldn't execute this command!").then(msg => { msg.react("❌") });
        if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I dont have the `KICK_MEMBERS` permission! Thats why i can't ban!").then(msg => { msg.react("❌") });
        let user = message.mentions.users.first();
        let reason = message.content.split(" ").slice(2).join(" ")
        let modlog = message.guild.channels.find("name", "mod-log");

        if (!modlog) return message.reply("It seems this server doesn't have a mod-log channel!").then(msg => { msg.react("❌") });
        if (message.mentions.users.size < 1) return message.reply("You didnt mention a user to kick!").then(msg => { msg.react("❌") });
        if (!reason) return message.reply("I cannot kick without a reason!")
        if (!message.guild.member(user)
        .kickable) return message.reply("I cannot kick this member!").then(msg => { msg.react("❌") });

        message.guild.member(user).kick(); message.channel.send(` ✅ Sucsess! ${message.author} i have kicked ${user.username} from **${message.guild.name}** for ${reason}`)

        const kickembed = new Discord.RichEmbed()
        .setColor(0x1235e5)
        .setAuthor(`${user.username}`, user.displayAvatarURL)
        .addField("Kick Information", `**Action:** Kick\n**Kicked User:** ${user.username}\n**Moderator** ${message.author}\n**Reason**: ${reason}\n`);
        modlog.send({ 
            embed : kickembed
      })
   }
