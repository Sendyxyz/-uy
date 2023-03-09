const { MessageEmbed } = require('discord.js')
const config = require('../config.json');
require("../structures/function")(client);

module.exports = {
    name: 'say',
    aliases: ["say"],
    usage: ".say",
    run: async (client, message, args) => {
        if (!message.member.roles.cache.has(config.kayıt.kayıtYetkiliID) && !message.member.permissions.has(8)) return message.reply('${client.emojis.cache.find(x => x.name === "1013946680296616006")} | Bu komutu kullanabilmek için gerekli izinlere sahip değilsin.').then(msg => { setTimeout(() => { msg.delete() }, 10000); })

        let embed = new MessageEmbed()
        .setColor('RANDOM')
        .setFooter({ text: `Deneme 💜 Kira`})
        .setTimestamp()

        let totalTagges = await message.guild.members.cache.filter(member => (member.user.username.includes(config.kayıt.tag) + member.user.discriminator.includes(config.kayıt.etiketTag))).size;
        let totalVoice = message.guild.members.cache.filter(x => x.voice.channel).size;
        let totalVoiceBot = message.guild.members.cache.filter(x => x.user.bot === true && x.voice.channel).size
        let includeNameTag = await message.guild.members.cache.filter(member => (member.user.username.includes(config.kayıt.tag))).size;
        let includeDiscriminator = await message.guild.members.cache.filter(member => (member.user.discriminator.includes(config.kayıt.etiketTag))).size;
        message.channel.send({
          embeds: [embed
            .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
            .setDescription(`
${client.emojis.cache.find(x => x.name === "lexustar")} Şu anda toplam **${totalVoice}** (**+${totalVoiceBot} Bot**) kişi seslide.
${client.emojis.cache.find(x => x.name === "lexustar")} Sunucuda **${message.guild.memberCount}** adet üye var (**+${message.guild.members.cache.filter(member => member.presence && member.presence.status !== "offline").size} Aktif**)
${client.emojis.cache.find(x => x.name === "lexustar")} Toplamda **${totalTagges}** kişi tagımızı alarak bizi desteklemiş. (**${includeNameTag}** adet isimde, **${includeDiscriminator}** adet etikette)
${client.emojis.cache.find(x => x.name === "lexustar")} Toplamda **${message.guild.premiumSubscriptionCount}** adet boost basılmış! (**${message.guild.premiumTier.replace('TIER_1', '1').replace('TIER_2', '2').replace('TIER_3', '3')}** seviye)`)
    
          ]
        })

    }
}