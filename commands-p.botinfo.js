const Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor(0xffa5f1)
    .setTitle("Here is some info about me!")
    .addField("Version", `${Discord.version}`, true)
    .addField("Server Count", `${client.guilds.size}`, true)
    .addField("Owner", "@jake.#5570", true)
    .addField("Members", `${client.users.size}`)
    message.channel.send(embed)
};
