const Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
  if (message.author.id !== "267006863122497536") return message.channel.send("Erm, you're not my bot owner `jake.` so you can't use this command!").then(msg => { msg.react("❌") });
  message.channel.send("Restarting now! <:pandoraCute:410722647056449547>").then(m => {
      client.destroy().then(() => {
        process.exit(1)
      })
    })
  }
