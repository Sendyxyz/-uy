const config = require("../config.json")
const moment = require("moment");
moment.locale("tr");
require("moment-duration-format");
require("../structures/function")(client);

module.exports = {
    name: 'guildMemberAdd',
    once: false,
    async execute(member, client) {
        const kayıtsızRol = member.guild.roles.cache.find(role => role.id == config.kayıt.kayıtsızID)
        const kayıtsızNick = config.kayıt.kayıtsızNick == "" ? null : config.kayıt.kayıtsızNick
        if (kayıtsızNick) await member.setNickname(kayıtsızNick)
        await member.roles.add(kayıtsızRol)

        let kuruluş, zaman
        await client.kurulus(member).then(res => {
            kuruluş = res[0]
            zaman = res[1]
        })

        const kayıtChat = member.guild.channels.cache.find(channel => channel.id == config.kayıt.kayıtchatID)
        kayıtChat.send(`${client.emojis.cache.find(x => x.name === "lexustar")} ${member}, ${member.guild.name} Sunucumuza hoşgeldin,
${client.emojis.cache.find(x => x.name === "lexustar")} Seninle beraber ${member.guild.memberCount} kişiye ulaştık. 
        
${client.emojis.cache.find(x => x.name === "lexustar")} Hesabın <t:${Math.floor(member.user.createdTimestamp / 1000)}> tarihinde (<t:${Math.floor(member.user.createdTimestamp / 1000)}:R>) oluşturulmuş.
${client.emojis.cache.find(x => x.name === "lexustar")} Kayıt işleminden sonra <#1043888236109504532> kanalına göz atmayı unutmayın.
        
${client.emojis.cache.find(x => x.name === "lexustar")} Tagımıza ulaşmak için herhangi bir kanala \`.tag\` yazabilirsiniz.
\`\`\`diff\n- Kayıt olduktan sonra kuralları okuduğunuzu kabul edeceğiz ve içeride yapılacak cezalandırma işlemlerini bunu göz önünde bulundurarak yapacağız. ${member.guild.name}\`\`\``)
    },
};