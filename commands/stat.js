const { MessageEmbed } = require('discord.js')
const yayın = require("../models/yayın.js")
const moment = require("moment");
require("moment-duration-format");
require("../structures/function")(client);

module.exports = {
    name: 'stat',
    aliases: ["stats"],
    usage: ".stat",
    run: async (client, message, args) => {

const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

yayın.findOne({ user: member.id }, async (err, res) => {
if (!res) {
return  message.reply(`Üzerine kayıtlı herhangi bir etkinlik bulamadım!`)
}
let embed = new MessageEmbed().setFooter("Developed By Kira").setAuthor("1949", message.guild.iconURL({dynamic: true})).setColor("RANDOM").setThumbnail(message.author.avatarURL({dynamic: true}))
.addFields(
{ name: "▶️ Toplam Yayın Saatin", value: `
\`\`\`fix
${moment.duration(res.toplam * 1000).format("H [saat], m [dakika]")}
\`\`\`
** **
`, inline: true },
{ name: "🔊 Toplam Ses Saatin", value: `
\`\`\`fix
${moment.duration(res.toplamses * 1000).format("H [saat], m [dakika]")}
\`\`\`
** **
`, inline: true },
{ name: "💬 Toplam Mesajların", value: `
\`\`\`fix
${res.toplammesaj} mesaj
\`\`\`
** **
`, inline: true },
{ name: "Son aktivitelerin", value: `
Son yayın aktivitesi: **<t:${res.sonyayintarih}:R>**
Son ses aktiviten: **<t:${res.sonsestarih}:R>**
Son mesaj aktiviten: **<t:${res.sonmesajtarih}:R>**
** **
** **
`, inline: false}
)
message.reply({ embeds: [embed.setDescription(`<@${res.user}> üyesinin bu sunucudaki aktivite listesi aşşağıda belirtilmiştir!
** **
** **`)]});
})

}
}
