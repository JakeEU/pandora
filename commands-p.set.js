const Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
    if (message.author.id !== "267006863122497536") return message.channel.send("Only my bot owner can use this comamnd, therefore your attempt is null!").then(msg => { msg.react("❌") });
    var args = message.content.split(" ").slice(1);
    let suffix = args.join(" ")

   if(!suffix) {
    message.channel.send("Incorrect usage - use p.set `text`");

 } else {
 client.user.setActivity(suffix, { type: 'PLAYING' });
 message.channel.send("I have set the the status to - " + suffix).then(msg => { msg.react("🎮") });
  };
}
