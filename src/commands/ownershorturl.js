const { MessageEmbed } = require('discord.js')
const fetch = require("node-fetch");

module.exports.run = async (client,message,args) => {
    if(!global.config.bot.owners.includes(message.author.id)) return  message.reply('<:no:878179108440375317> Only The Owner Of Usure Can Use This Bypass <:no:878179108440375317>')
     if(!args[0]) return message.channel.send("Error: Please give us a url to shorten.");
   const url = args.join(" ");

    const data = await fetch(
      `https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`
    ).then((res) => res.json());

    const embed = new MessageEmbed()
     .setAuthor(`${message.author.username}`)
      .setDescription('**[URL](https://en.wikipedia.org/wiki/URL) Shortened!**')
      .addFields(

  { name: `Original URL`, value: `${url}` ,inline: true },

  { name: `Shortened URL`, value: `${data.shorturl}` ,inline: false }

)
.setTimestamp()
.setColor("#FF0000")
    message.channel.send(embed);
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
  };
  
  exports.help = {
    name: "ownershorturl",
    description: "",
    usage: ""
  };