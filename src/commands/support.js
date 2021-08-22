const Discord = require('discord.js')
const Usure = require("Usure-one");
const { MessageButton, MessageActionRow } = require('discord-buttons');
const botdata = require("../database/models/botlist/bots.js")
module.exports.run = async (client,message,args) => {
  let x = await botdata.find();
  let bots = await x.filter(a => a.ownerID == message.author.id || a.coowners.includes(message.author.id))
   const embed = new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
   .setDescription(`<a:yes:833101995723194437> **[Usure Support](https://Usure.one)** <a:yes:833101995723194437>\n\n**Visit the official support chat for Usure where you can ask our Team members questions! You can also find one in our [web](https://Usure.one)!**`)
   .setColor("#7289da")
         let button = new MessageButton()
  .setStyle('url')
  .setURL('https://Usure.one/dc') 
  .setLabel('Join our Support Server')
    .setEmoji('866089515993792522');


let row = new MessageActionRow()
  .addComponents(button);
return message.channel.send({ embed: embed, buttons: [ button ]
});
   message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
  };
  
  exports.help = {
    name: "support",
    description: "",
    usage: ""
  };