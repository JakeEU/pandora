const Discord = require ('discord.js');

const { TOKEN, prefix} = require('./config');

const client = new Discord.Client();

const db = require ('quick.db');

client.on("ready", function() {
    console.log(`Ready! with - ${client.guilds.size} servers!`);
	client.user.setActivity("p.help | p.servers");
    client.user.setStatus("online");
});

client.on("guildMemberAdd", (message) => {
    let avatar = message.user.displayAvatarURL;
    const WelcomeMsg = new Discord.RichEmbed()
      .setAuthor(message.user.username, avatar)
      .setTitle("Member joined!")
      .setColor(0xffa5f1)
      .setDescription(message.toString() + ` Welcome to **${message.guild.name}** :inbox_tray:`)
      .setTimestamp()
      .setFooter(`Member list now sits at - ${message.guild.memberCount}`)
      const channel = client.channels.find("name", "bot-hell")     
      channel.send({embed: WelcomeMsg}) 
});

client.on("guildMemberRemove", (message) => {
    let avatar = message.user.displayAvatarURL;
    const LeaveMsg = new Discord.RichEmbed()
     .setAuthor(message.user.username, avatar)
     .setTitle("Member left!")
     .setColor(0xffa5f1)
     .setDescription(message.toString() + ` Left **${message.guild.name}** :outbox_tray:  `)
     .setFooter("Left the server at!")
     .setTimestamp()
     .setFooter(`Member list now sits at - ${message.guild.memberCount}`)
     const channel = client.channels.find("name", "bot-hell")     
     channel.send({embed: LeaveMsg}) 
})

client.on("message", message => {
    let embed = new Discord.RichEmbed()
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let args = message.content.slice(prefix.lenth).trim().split(" ");
    let cmd = args.shift().toLowerCase()

    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;

    try {
        let commandFile = require(`./commands-${cmd}.js`)
        commandFile.run(client, message, args);
    } catch (error) {
        console.log(error.message);

    } finally {
        console.log(`${cmd} has been successfully executed!`);
    };
    process.on('unhandledRejection', err => console.error(`Uncaught Promise Rejection: \n${err.stack}`));
});
client.login(TOKEN)
