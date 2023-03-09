const moment = require("moment");
require("moment-duration-format");
const { MessageEmbed, Discord, MessageActionRow, MessageSelectMenu } = require("discord.js");
const yayın = require("../models/yayın.js")

module.exports = {
    name: 'sil',
    aliases: ["temizle"],
    usage: ".sil",
    run: async (client, message, args) => {
      message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`${args[0]} Mesaj silindi!`).then(msg => msg.delete(3000));
      });
if (!args[0]) {
let embed = new MessageEmbed().setFooter("Developed By Kira").setAuthor("1949", message.guild.iconURL({dynamic: true})).setColor("RANDOM").setThumbnail(message.guild.iconURL({dynamic: true})).setDescription(`Aşağıda Oluşan Menüden **<#${message.channel.id}>** kanalında kaç tane mesaj silineceğini belirtiniz.`)

      const row = new MessageActionRow().addComponents(
  new MessageSelectMenu()
    .setCustomId("silpanel")
    .setPlaceholder("Menüden seçenek seçiniz!")
    .addOptions([
      {
        label: `25`,
        description: "25 Mesaj Siler",
        value: "1",
      },
      {
        label: `50`,
        description: "50 Mesaj Siler",
        value: "2",
      },
      {
        label: `100`,
        description: "100 Mesaj Siler",
        value: "3",
      },
      {
        label: `İşlem İptal`,
        description: "İşlem İptal Edilir",
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

  if(button.customId === "silpanel") {
    if(button.values[0] === "1") {
      message.channel.bulkDelete(25).then(() => {
        message.channel.send("25 Mesaj silindi!").then(msg => msg.delete(3000));
      });
    } else if(button.values[0] === "2") {
      message.channel.bulkDelete(50).then(() => {
        message.channel.send("50 Mesaj silindi!").then(msg => msg.delete(3000));
      });
    } else if(button.values[0] === "3") {
      message.channel.bulkDelete(100).then(() => {
        message.channel.send("100 Mesaj silindi!").then(msg => msg.delete(3000));
      });
} else if(button.values[0] === "4") {
message.reply("İşlem iptal edildi!");
    }
  }
})
collector.on("end", async (button) => {
  row.components[0].setDisabled(true);

msg.edit({ components: [row] });
});
}
}
  };
