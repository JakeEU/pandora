const Discord = require ('discord.js')
module.exports.run = (client, message) => {
        const args = message.content.split(" ").slice(1);
        if (message.author.id !== "267006863122497536") return message.channel.send("Erm, you're not my bot owner `jake.` so you can't use this command!").then(msg => { msg.react("❌") });
        try {
          const code = args.join(" ");
          let evaled = eval(code);

          if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
    
          const embed = new Discord.RichEmbed()
          .setColor(0xffa5f1)
          .setTitle((`Output 📤 - Evaluation for ${message.author.username}`))
          .setDescription(`\`\`\`xl\n${clean(evaled)}\`\`\``)
          message.channel.send(embed)
        } catch (err) {
          const embed = new Discord.RichEmbed()
          .setColor(0xffa5f1)
          .setTitle("An error has occured<:pandoraSilly:410719109806948353>")
          .setDescription(`\`\`\`\`xl\n${clean(err)}\n\`\`\``)
          message.channel.send(embed)
        }
      }

    function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }
