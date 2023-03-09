const moment = require("moment");
require("moment-duration-format");
const { MessageEmbed, Discord, MessageActionRow, MessageSelectMenu } = require("discord.js");
const yayın = require("../models/yayın.js")

module.exports = {
    name: 'top',
    aliases: ["topstat"],
    usage: ".top",
    run: async (client, message, args) => {

let embed = new MessageEmbed().setFooter("Developed By Kira").setAuthor("1949", message.guild.iconURL({dynamic: true})).setColor("RANDOM").setThumbnail(message.guild.iconURL({dynamic: true})).setDescription(`Aşağıda Oluşan Menüden **${message.guild.name}** Sunucusunun Genel İstatistik Tablosuna Ulaşabilirsin!`)

      const row = new MessageActionRow().addComponents(
  new MessageSelectMenu()
    .setCustomId("topstatpanel")
    .setPlaceholder("Menüden seçenek seçiniz!")
    .addOptions([
      {
        label: `Top yayın`,
        description: "Top yayın bilgisi",
        value: "1",
      },
      {
        label: `Top ses`,
        description: "Top ses bilgisi",
        value: "2",
      },
      {
        label: `Top mesaj.`,
        description: "Top mesaj bilgisi",
        value: "3",
      },
      {
        label: `Menüyü kapatır`,
        description: "Menüyü Kapat",
        value: "4",
      }
    ]),
);
message.react(client.emojis.cache.find(x => x.name === "onay"))
var msg = await message.channel.send({
  embeds: [embed],
  components: [row],
});
var filter = (button) => button.user.id === message.author.id;
const collector = msg.createMessageComponentCollector({
  filter,
  time: 30000,
});

collector.on("collect", async (button) => {
  row.components[0].setDisabled(true);

msg.edit({ components: [row] });

  if(button.customId === "topstatpanel") {
    if(button.values[0] === "1") {

      const data = await yayın.find({ }).sort({ toplam: -1 });
      const arr = [];
      data.forEach((x) => arr.push({ id: x.user, toplam: x.toplam }));
      const index = arr.findIndex((x) => x.id === message.author.id) + 1;
      const list = data.filter((x) => message.guild.members.cache.has(x.user)).splice(0, 20).map((x, index) => `\` ${index + 1} \` <@${x.user}> \`${moment.duration(x.toplam * 1000).format("H [saat], m [dakika], s [saniye]")}\``).join("\n");
if (!data.length) {
  msg.delete()
  return message.reply("Herhangi bir yayın verisi bulamadım!");
}
msg.edit({embeds: [embed.setDescription(`Mesajda **${message.guild.name}** Sunucusunun Top Yayın Sıralaması Listeleniyor;
** **
${list}`)]})
    } else if(button.values[0] === "2") {

      const data2 = await yayın.find({ }).sort({ toplamses: -1 });
      const arr2 = [];
      data2.forEach((x) => arr2.push({ id: x.user, toplamses: x.toplamses }));
      const index2 = arr2.findIndex((x) => x.id === message.author.id) + 1;
      const list2 = data2.filter((x) => message.guild.members.cache.has(x.user)).splice(0, 20).map((x, index2) => `\` ${index2 + 1} \` <@${x.user}> \`${moment.duration(x.toplamses * 1000).format("H [saat], m [dakika], s [saniye]")}\``).join("\n");
if (!data2.length) {
  msg.delete()
  return message.reply("Herhangi bir ses verisi bulamadım!");
}
msg.edit({embeds: [embed.setDescription(`Mesajda **${message.guild.name}** Sunucusunun Top Ses Sıralaması Listeleniyor;
** **
${list2}`)]})
    } else if(button.values[0] === "3") {

      const data3 = await yayın.find({ }).sort({ toplammesaj: -1 });
      const arr3 = [];
      data3.forEach((x) => arr3.push({ id: x.user, toplammesaj: x.toplammesaj }));
      const index3 = arr3.findIndex((x) => x.id === message.author.id) + 1;
      const list3 = data3.filter((x) => message.guild.members.cache.has(x.user)).splice(0, 20).map((x, index3) => `\` ${index3 + 1} \` <@${x.user}> \`${x.toplammesaj} mesaj\``).join("\n");
if (!data3.length) {
  msg.delete()
  return message.reply("Herhangi bir mesaj verisi bulamadım!");
}
msg.edit({embeds: [embed.setDescription(`Mesajda **${message.guild.name}** Sunucusunun Top Mesaj Sıralaması Listeleniyor;
** **
${list3}`)]})
} else if(button.values[0] === "4") {
message.reply("İşlem iptal edildi!");
    }
  }
})
collector.on("end", async (button) => {
  msg.delete();
});
}
  };
