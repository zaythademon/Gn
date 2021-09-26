const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#363940")       
.setThumbnail('https://i.imgur.com/b5MVGYq.pngg')
.setFooter('zay™️')
.addField('( $gen )');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}
