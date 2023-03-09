const { Message, MessageEmbed } = require("discord.js");
const yayın = require("../models/yayın.js")
const config = require("../config.json")
 /**
 * @param {Message} message
 */

 module.exports = {
     name: 'messageCreate',
     once: false,
     async execute(message) {
  const levelup = client.channels.cache.find(x => x.name == "level-up");
  if (message.author.bot || !message.channel || message.channel.type == "dm") return;

    await yayın.findOne({ user: message.author.id }, async (err, res) => {
        if (res) {
            res.sonmesajtarih = `${Math.floor(Math.floor(Date.now()) / 1000)}`
            res.toplammesaj = res.toplammesaj + 1
            res.save().catch(e => console.log(e))


                    const role1 = message.guild.roles.cache.find(r => r.name === 'Chat Elmas');
                    const role2 = message.guild.roles.cache.find(r => r.name === 'Chat Altın');
                    const role3 = message.guild.roles.cache.find(r => r.name === 'Chat Gümüş');
                    const role4 = message.guild.roles.cache.find(r => r.name === 'Chat Bronz');

              if (res.toplammesaj >= "5000") {
              if (message.member.roles.cache.has(role1.id)) return;
              message.author.roles.remove(role2)
              message.member.roles.add(role1)
              return levelup.send(`💬 Tebrikler! ${message.author} chat kanallarında yeterince levele ulaştın ve **Chat Elmas** rolünü almaya hak kazandın!`);
              } else if (res.toplammesaj >= "2500") {
              if (message.member.roles.cache.has(role2.id)) return;
              message.author.roles.remove(role3)
              message.member.roles.add(role2)
              return levelup.send(`💬 Tebrikler! ${message.author} chat kanallarında yeterince levele ulaştın ve **Chat Altın** rolünü almaya hak kazandın!`);
              } else if (res.toplammesaj >= "1000") {
              if (message.member.roles.cache.has(role3.id)) return;
              message.author.roles.remove(role4)
              message.member.roles.add(role3)
              return levelup.send(`💬 Tebrikler! ${message.author} chat kanallarında yeterince levele ulaştın ve **Chat Gümüş** rolünü almaya hak kazandın!`);
              } else if (res.toplammesaj >= "5") {
              if (message.member.roles.cache.has(role4.id)) return;
              message.member.roles.add(role4)
              return levelup.send(`💬 Tebrikler! ${message.author} chat kanallarında yeterince levele ulaştın ve **Chat Bronz** rolünü almaya hak kazandın!`);
              }

        } else if (!res) {
          const data = new yayın({
            user: message.author.id,
            yayindurum: "0",
            sonyayintarih: "0",
            sonmesajtarih: Math.floor(Math.floor(Date.now()) / 1000),
            sonsestarih: "0",
            toplam: "0",
            toplammesaj: "1",
            toplamses: "0"
          })
          data.save().catch(e => console.log(e))
        }
      })
 },
}
