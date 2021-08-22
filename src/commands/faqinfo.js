const Discord = require('discord.js')
const Usure = require("usure-one");
const botdata = require("../database/models/botlist/bots.js")
module.exports.run = async (client,message,args) => {
  let x = await botdata.find();
  let bots = await x.filter(a => a.ownerID == message.author.id || a.coowners.includes(message.author.id))
   const embed = new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
   .setDescription(`<:thinking:878357408844488784> **[Usure Information](https://Usure.one)** <:thinking:878357408844488784>\nUsure is a Bot And Server List originally developed by [vCodes.xyz](https://vcodes.xyz/)\n\nAbout Me:\n**Mr Usure is my developer, he has created Usure with all its cmds!\n[vCodes](https://vcodes.xyz) Created [Usure](https://Usure.one)'s base but is made better by Mr Usure!\n\nMy Links:\nInvite me [here](https://Usurebot.tk/)\nVisit my [uptimer web](https://Usureuptime.tk/)\nVisit [Usure!](https://Usure.one)\n\nMade with :heart: by Mr Usure.**`)
   .setColor("#7289da")
   .setThumbnail('https://cdn.discordapp.com/attachments/860628976572563507/870721630106681404/standard_5.gif')
   .setFooter('Made with ❤️')
   message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["info"],
  };
  
  exports.help = {
    name: "faq",
    description: "",
    usage: ""
  };