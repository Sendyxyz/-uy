const moment = require("moment");
require("moment-duration-format");
const yayın = require("../models/yayın.js")
const { MessageEmbed, Discord } = require("discord.js");

module.exports = {
    name: 'voiceStateUpdate',
    once: false,
    async execute(oldState, newState) {

if ((oldState.member && oldState.member.user.bot) || (newState.member && newState.member.user.bot)) return;

const streamer = client.channels.cache.find(x => x.name == "streamer-bilgi");
const levelup = client.channels.cache.find(x => x.name == "level-up");
let embed = new MessageEmbed().setFooter("Developed By Kira").setAuthor("1949", oldState.guild.iconURL({dynamic: true})).setColor("RANDOM")
if (!oldState.channel && newState.channel) return;
if (oldState.channel && !newState.channel) {
await yayın.findOne({ user: newState.member.id }, async (err, res) => {
    if (!res) return;
    if (res.yayindurum === "0") return;

          let yayintoplam = Math.floor(Math.floor(Date.now()) / 1000) - res.sonyayintarih
          res.toplam = res.toplam + yayintoplam
          res.yayindurum = "0"
          res.save().catch(e => console.log(e))
          streamer.send({ embeds: [embed.setDescription(`${oldState.member} üyesi ${oldState.channel} kanalında <t:${Math.floor(Math.floor(Date.now()) / 1000)}:R> yayını kapattı! Yayın toplam **${moment.duration(yayintoplam * 1000).format("H [saat], m [dakika], s [saniye]")}** sürdü!`)]});

          const role1 = newState.guild.roles.cache.find(r => r.name === 'Streamer Elmas');
          const role2 = newState.guild.roles.cache.find(r => r.name === 'Streamer Altın');
          const role3 = newState.guild.roles.cache.find(r => r.name === 'Streamer Gümüş');
          const role4 = newState.guild.roles.cache.find(r => r.name === 'Streamer Bronz');

if (res.toplam >= "259200") {
if (newState.member.roles.cache.has(role1.id)) return;
newState.member.roles.remove(role2)
newState.member.roles.add(role1)
return levelup.send(`▶️ Tebrikler! ${newState.member} en sonki yayın ile beraber 72 saatlik yayın barajını aştın ve **Streamer Elmas** rolünü almaya hak kazandın!`);
} else if (res.toplam >= "86400") {
if (newState.member.roles.cache.has(role2.id)) return;
newState.member.roles.remove(role3)
newState.member.roles.add(role2)
return levelup.send(`▶️ Tebrikler! ${newState.member} en sonki yayın ile beraber 24 saatlik yayın barajını aştın ve **Streamer Altın** rolünü almaya hak kazandın!`);
} else if (res.toplam >= "21600") {
if (newState.member.roles.cache.has(role3.id)) return;
newState.member.roles.remove(role4)
newState.member.roles.add(role3)
return levelup.send(`▶️ Tebrikler! ${newState.member} en sonki yayın ile beraber 6 saatlik yayın barajını aştın ve **Streamer Gümüş** rolünü almaya hak kazandın!`);
} else if (res.toplam >= "300") {
if (newState.member.roles.cache.has(role4.id)) return;
newState.member.roles.add(role4)
return levelup.send(`▶️ Tebrikler! ${newState.member} en sonki yayın ile beraber 5 dakikalık yayın barajını aştın ve **Streamer Bronz** rolünü almaya hak kazandın!`);
}
    })
    return;
}
if (oldState.channel.id && newState.channel.id && oldState.channel.id != newState.channel.id) {
  yayın.findOne({ user: oldState.member.id }, async (err, res) => {
    if (!res) return;
    if (res.yayindurum === "0") return;
          let yayintoplam = Math.floor(Math.floor(Date.now()) / 1000) - res.sonyayintarih
          res.toplam = res.toplam + yayintoplam
          res.yayindurum = "0"
          res.save().catch(e => console.log(e))
          streamer.send({ embeds: [embed.setDescription(`${oldState.member} üyesi ${oldState.channel} kanalında <t:${Math.floor(Math.floor(Date.now()) / 1000)}:R> yayını kapattı! Yayın toplam **${moment.duration(yayintoplam * 1000).format("H [saat], m [dakika], s [saniye]")}** sürdü!`)]});

          const role1 = newState.guild.roles.cache.find(r => r.name === 'Streamer Elmas');
          const role2 = newState.guild.roles.cache.find(r => r.name === 'Streamer Altın');
          const role3 = newState.guild.roles.cache.find(r => r.name === 'Streamer Gümüş');
          const role4 = newState.guild.roles.cache.find(r => r.name === 'Streamer Bronz');

if (res.toplam >= "259200") {
if (newState.member.roles.cache.has(role1.id)) return;
newState.member.roles.remove(role2)
newState.member.roles.add(role1)
return levelup.send(`▶️ Tebrikler! ${newState.member} en sonki yayın ile beraber 72 saatlik yayın barajını aştın ve **Streamer Elmas** rolünü almaya hak kazandın!`);
} else if (res.toplam >= "86400") {
if (newState.member.roles.cache.has(role2.id)) return;
newState.member.roles.remove(role3)
newState.member.roles.add(role2)
return levelup.send(`▶️ Tebrikler! ${newState.member} en sonki yayın ile beraber 24 saatlik yayın barajını aştın ve **Streamer Altın** rolünü almaya hak kazandın!`);
} else if (res.toplam >= "21600") {
if (newState.member.roles.cache.has(role3.id)) return;
newState.member.roles.remove(role4)
newState.member.roles.add(role3)
return levelup.send(`▶️ Tebrikler! ${newState.member} en sonki yayın ile beraber 6 saatlik yayın barajını aştın ve **Streamer Gümüş** rolünü almaya hak kazandın!`);
} else if (res.toplam >= "300") {
if (newState.member.roles.cache.has(role4.id)) return;
newState.member.roles.add(role4)
return levelup.send(`▶️ Tebrikler! ${newState.member} en sonki yayın ile beraber 5 dakikalık yayın barajını aştın ve **Streamer Bronz** rolünü almaya hak kazandın!`);
}
    })
    return;
}
  if (oldState.channel.id && !oldState.streaming && newState.channel.id && newState.streaming) {
    await yayın.findOne({ user: newState.member.id }, async (err, res) => {
        if (res) {
            res.sonyayintarih = `${Math.floor(Math.floor(Date.now()) / 1000)}`
            res.yayindurum = "1"
            res.save().catch(e => console.log(e))

        } else if (!res) {
          const data = new yayın({
            user: newState.member.id,
            yayindurum: "1",
            sonyayintarih: Math.floor(Math.floor(Date.now()) / 1000),
            sonmesajtarih: "0",
            sonsestarih: "0",
            toplam: "0",
            toplammesaj: "0",
            toplamses: "0"
          })
          data.save().catch(e => console.log(e))
        }
      })
    streamer.send({ embeds: [embed.setDescription(`${newState.member} üyesi ${newState.channel} kanalında <t:${Math.floor(Math.floor(Date.now()) / 1000)}:R> yayın açtı!`)]});
}
  if (oldState.channel.id && oldState.streaming && newState.channel.id && !newState.streaming) {
    await yayın.findOne({ user: newState.member.id }, async (err, res) => {
      if (!res) return;
      if (res.yayindurum === "0") return;
            let yayintoplam = Math.floor(Math.floor(Date.now()) / 1000) - res.sonyayintarih
            res.toplam = res.toplam + yayintoplam
            res.yayindurum = "0"
            res.save().catch(e => console.log(e))
            streamer.send({ embeds: [embed.setDescription(`${newState.member} üyesi ${newState.channel} kanalında <t:${Math.floor(Math.floor(Date.now()) / 1000)}:R> yayını kapattı! Yayın toplam **${moment.duration(yayintoplam * 1000).format("H [saat], m [dakika], s [saniye]")}** sürdü!`)]});

            const role1 = newState.guild.roles.cache.find(r => r.name === 'Streamer Elmas');
            const role2 = newState.guild.roles.cache.find(r => r.name === 'Streamer Altın');
            const role3 = newState.guild.roles.cache.find(r => r.name === 'Streamer Gümüş');
            const role4 = newState.guild.roles.cache.find(r => r.name === 'Streamer Bronz');

  if (res.toplam >= "259200") {
  if (newState.member.roles.cache.has(role1.id)) return;
  newState.member.roles.remove(role2)
  newState.member.roles.add(role1)
  return levelup.send(`▶️ Tebrikler! ${newState.member} en sonki yayın ile beraber 72 saatlik yayın barajını aştın ve **Streamer Elmas** rolünü almaya hak kazandın!`);
} else if (res.toplam >= "86400") {
  if (newState.member.roles.cache.has(role2.id)) return;
  newState.member.roles.remove(role3)
  newState.member.roles.add(role2)
  return levelup.send(`▶️ Tebrikler! ${newState.member} en sonki yayın ile beraber 24 saatlik yayın barajını aştın ve **Streamer Altın** rolünü almaya hak kazandın!`);
} else if (res.toplam >= "21600") {
  if (newState.member.roles.cache.has(role3.id)) return;
  newState.member.roles.remove(role4)
  newState.member.roles.add(role3)
  return levelup.send(`▶️ Tebrikler! ${newState.member} en sonki yayın ile beraber 6 saatlik yayın barajını aştın ve **Streamer Gümüş** rolünü almaya hak kazandın!`);
} else if (res.toplam >= "300") {
  if (newState.member.roles.cache.has(role4.id)) return;
  newState.member.roles.add(role4)
  return levelup.send(`▶️ Tebrikler! ${newState.member} en sonki yayın ile beraber 5 dakikalık yayın barajını aştın ve **Streamer Bronz** rolünü almaya hak kazandın!`);
}
      })
}
}
}
