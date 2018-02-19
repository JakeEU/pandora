const Disocrd = require ('discord.js')
module.exports.run = (client, args, message) => {
        const hug = ["https://imgur.com/a/2SmjU", "https://imgur.com/a/KayQ3", "http://i.imgur.com/pME21N2.gif" ,"https://i.imgur.com/kvTu3tb.jpg",]
        const rn = require('random-number')

        if (!message.mentions.users.first()) return message.reply("You can't hug your self silly<:pandoraSilly:410719109806948353>")
        let r = rn({
            min: 0,
            max: hug.length - 1,
            integer: true
        })
        let image = hug[r];
        message.channel.send('**' + message.author.username + '** *hugs* **' + message.mentions.users.first().username + '**<:pandoraCute:410722647056449547>\n' + image);
    };
