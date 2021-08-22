  
const Discord = require('discord.js')
const ms = require("parse-ms");
const db = require("quick.db");
const botsdata = require("../database/models/botlist/bots.js")
const config = require("../../config.js");
module.exports.run = async (client, message, args) => {
var bot = message.mentions.users.first()
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription("<:no:878179108440375317> Please Mention A bot from our web.\n<:info:878179399596392479> **Ex.** *+botuptime @Usure.one or 123456789123456789*"));
    if(bot)
    {
      var bot = bot;
    } else {
      var bot = args[0];
     var bot = client.users.cache.get(bot)
    }
    if(!bot)
    {
      const embed = new Discord.MessageEmbed()
      .setDescription(`<:no:878179108440375317> *You have given an invalid bot ID or mention.*\n<:info:878179399596392479> **Ex.** *+botuptime @Usure.one or 123456789123456789*`)
       .setColor("#7289da")
      return message.channel.send(embed)
    } 
      
    
         const votes = require("../database/models/botlist/vote.js");
      let botdata = await botsdata.findOne({ botID: bot.id });
      if(!botdata)
      {
         const embed1 = new Discord.MessageEmbed()
      .setDescription(`<:no:878179108440375317> *Thats not a current bot in Usure or in guild.*`)
       .setColor("#7289da")
      return message.channel.send(embed1)
      }
        var checking = db.fetch(`rate_${bot.id}`);
   if(!checking)
   {
     var checking = "100";
   }
       var check = db.fetch(`presence_${bot.id}`);
       if(!check)
       {
         var check = "Online";
       }
     let time = db.fetch(`timefr_${bot.id}`);
     var timeleft = await ms(Date.now() - time);
       var days = timeleft.days;
        var hour = timeleft.hours;
       var minutes = timeleft.minutes;
       var seconds = timeleft.seconds;
    var ochecks = db.fetch(`offlinechecks_${bot.id}`);
    let checks = db.fetch(`checks_${bot.id}`); 
 
     const embed2 = new Discord.MessageEmbed()
      .setDescription(`<:uptime:878179675099258910> Uptime - ${checking}% Checks - ${ochecks || 0}/${checks || 0} \n<:info:878179399596392479> ${check} Time - ${days}d ${hour}h ${minutes}m ${seconds}s`)
       .setColor("#7289da")
      return message.channel.send(embed2)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bu"],
};

exports.help = {
  name: "botuptime",
  description: "uptime",
  usage: ""
};