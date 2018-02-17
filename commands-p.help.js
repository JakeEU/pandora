const Discord = require ('discord.js');
module.exports.run = (client, message, args) => {
        console.log("Help sent!")
        const embed = new Discord.RichEmbed()
        .setTitle("Take a look at my commands!")
        .setColor(0xffa5f1)
        .setDescription("My prefix for my commands are `p.`")
        .addField("Reminder",
        "`hooks such as <> and [] are not needed when using a command`")
        .addField("Extra help",
        "`You can use <help.commandname> - for some more info on that command! [this is still in progress, some commands may not work]`")
        .addField("Owner Commands",
        "`p.eval` `p.set` `p.restart`")
        .addField("Administrator Commands",
        "`p.warn <mentioned user>` `p.ban <mentioned user>` `p.kick <mentioned user>` `p.setup`")
        .addField("Utility Commands",
        "`p.achievement [word(s)]` `p.scrabble [words(s)]` `p.define [word]` `p.invite` `p.help` `p.addvoice` `p.addtext` `p.addrole`")
        .addField("Fun Commands",
        "`p.flip` `p.ping` `p.uptime` `p.servers` `p.info` `p.avatar` `p.members` `p.say` `p.hug`")
        .addField("NSFW Commands",
        "`p.nsfw`")
        message.author.send(embed); {

        };
        const embed1 = new Discord.RichEmbed()
		embed1.setTitle("Check your Private Messages")
		embed1.setDescription("I have sent you my commands! :mailbox_with_mail:")
		embed1.setColor(0xffa5f1)
		embed1.setFooter("v1.1")
		message.channel.send({ embed: embed1 });
     };
