const Disocrd = require ('discord.js')
module.exports.run = (client, message, args) => {
        String.prototype.replaceAll = function(search, replacement) {
            var target = this;
            return target.split(search).join(replacement);
        };
    
        
                var embed1 = new Discord.RichEmbed()
                .setColor(0xffa5f1)
                .setImage("https://www.minecraftskinstealer.com/achievement/a.php?i=17&h=Achievement&t=" + message.content.slice(13).toString().replaceAll(" ", "+"))
                .setFooter('v1.1')
                message.channel.send(embed1);
         };
    
        if (message.content.startsWith(PREFIX + 'scrabble')) {
            String.prototype.shuffle = function () {
                var a = this.split(""),
                    n = a.length;
            
                for(var i = n - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = a[i];
                    a[i] = a[j];
                    a[j] = tmp;
                }
                return a.join("");
            }
            
            var msg = message.content.slice(10).shuffle();
            message.channel.send(msg);
        };
