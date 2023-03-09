const yayın = require("../models/yayın.js")
const { MessageEmbed, Discord } = require("discord.js");

module.exports = {
    name: 'voiceStateUpdate',
    once: false,
    async execute(oldState, newState) {

if ((oldState.member && oldState.member.user.bot) || (newState.member && newState.member.user.bot)) return;

const levelup = client.channels.cache.find(x => x.name == "level-up");
if (!oldState.channel && newState.channel) {
  await yayın.findOne({ user: newState.member.id }, async (err, res) => {
      if (res) {
          res.sonsestarih = `${Math.floor(Math.floor(Date.now()) / 1000)}`
          res.save().catch(e => console.log(e))
      } else if (!res) {
        const data = new yayın({
          user: newState.member.id,
          yayindurum: "0",
          sonyayintarih: "0",
          sonmesajtarih: "0",
          sonsestarih: Math.floor(Math.floor(Date.now()) / 1000),
          toplam: "0",
          toplammesaj: "0",
          toplamses: "0"
        })
        data.save().catch(e => console.log(e))
      }
    })
    return;
}
if (oldState.channel && !newState.channel) {
  await yayın.findOne({ user: oldState.member.id }, async (err, res) => {
      if (res) {
          let sestoplam = Math.floor(Math.floor(Date.now()) / 1000) - res.sonsestarih
          res.toplamses = res.toplamses + sestoplam
          res.save().catch(e => console.log(e))

          const role1 = newState.guild.roles.cache.find(r => r.name === 'Voice Elmas');
          const role2 = newState.guild.roles.cache.find(r => r.name === 'Voice Altın');
          const role3 = newState.guild.roles.cache.find(r => r.name === 'Voice Gümüş');
          const role4 = newState.guild.roles.cache.find(r => r.name === 'Voice Bronz');

if (res.toplamses >= "604800") {
if (oldState.member.roles.cache.has(role1.id)) return;
oldState.member.roles.remove(role2)
oldState.member.roles.add(role1)
return levelup.send(`🔊 Tebrikler! ${oldState.member} ses kanallarında yeterince levele ulaştın ve **Voice Elmas** rolünü almaya hak kazandın!`);
} else if (res.toplamses >= "259200") {
if (oldState.member.roles.cache.has(role2.id)) return;
oldState.member.roles.remove(role3)
oldState.member.roles.add(role2)
return levelup.send(`🔊 Tebrikler! ${oldState.member} ses kanallarında yeterince levele ulaştın ve **Voice Altın** rolünü almaya hak kazandın!`);
} else if (res.toplamses >= "172800") {
if (oldState.member.roles.cache.has(role3.id)) return;
oldState.member.roles.remove(role4)
oldState.member.roles.add(role3)
return levelup.send(`🔊 Tebrikler! ${oldState.member} ses kanallarında yeterince levele ulaştın ve **Voice Gümüş** rolünü almaya hak kazandın!`);
} else if (res.toplamses >= "43200") {
if (oldState.member.roles.cache.has(role4.id)) return;
oldState.member.roles.add(role4)
return levelup.send(`🔊 Tebrikler! ${oldState.member} ses kanallarında yeterince levele ulaştın ve **Voice Bronz** rolünü almaya hak kazandın!`);
}
      } else if (!res) return;
    })
    return;
}
if (oldState.channel.id && newState.channel.id && oldState.channel.id != newState.channel.id) {
  await yayın.findOne({ user: newState.member.id }, async (err, res) => {
      if (res) {
          let sestoplam = Math.floor(Math.floor(Date.now()) / 1000) - res.sonsestarih
          res.toplamses = res.toplamses + sestoplam
          res.sonsestarih = Math.floor(Math.floor(Date.now()) / 1000)
          res.save().catch(e => console.log(e))

          const role1 = newState.guild.roles.cache.find(r => r.name === 'Voice Elmas');
          const role2 = newState.guild.roles.cache.find(r => r.name === 'Voice Altın');
          const role3 = newState.guild.roles.cache.find(r => r.name === 'Voice Gümüş');
          const role4 = newState.guild.roles.cache.find(r => r.name === 'Voice Bronz');

if (res.toplamses >= "604800") {
if (oldState.member.roles.cache.has(role1.id)) return;
oldState.member.roles.remove(role2)
oldState.member.roles.add(role1)
return levelup.send(`🔊 Tebrikler! ${oldState.member} ses kanallarında yeterince levele ulaştın ve **Voice Elmas** rolünü almaya hak kazandın!`);
} else if (res.toplamses >= "259200") {
if (oldState.member.roles.cache.has(role2.id)) return;
oldState.member.roles.remove(role3)
oldState.member.roles.add(role2)
return levelup.send(`🔊 Tebrikler! ${oldState.member} ses kanallarında yeterince levele ulaştın ve **Voice Altın** rolünü almaya hak kazandın!`);
} else if (res.toplamses >= "172800") {
if (oldState.member.roles.cache.has(role3.id)) return;
oldState.member.roles.remove(role4)
oldState.member.roles.add(role3)
return levelup.send(`🔊 Tebrikler! ${oldState.member} ses kanallarında yeterince levele ulaştın ve **Voice Gümüş** rolünü almaya hak kazandın!`);
} else if (res.toplamses >= "43200") {
if (oldState.member.roles.cache.has(role4.id)) return;
oldState.member.roles.add(role4)
return levelup.send(`🔊 Tebrikler! ${oldState.member} ses kanallarında yeterince levele ulaştın ve **Voice Bronz** rolünü almaya hak kazandın!`);
}
      } else if (!res) return;
    })
    return;
}
}
}
