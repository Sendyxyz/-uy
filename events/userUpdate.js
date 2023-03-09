const config = require("../config.json")
const moment = require("moment");
moment.locale("tr");
require("moment-duration-format");
require("../structures/function")(client);

const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'userUpdate',
    once: false,
    async execute(oldUser, newUser, client) {

        let tagLog = client.channels.cache.get(config.kanal.tagLog)
        let member = await client.guilds.cache.get(config.sunucuID).members.cache.get(newUser.id);

        let embeds = new MessageEmbed()
            .setAuthor({ name: member.guild.name, iconURL: member.guild.iconURL({ dynamic: true })})
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setColor('RANDOM')

        if(oldUser.username.includes(config.kayıt.tag) && !newUser.username.includes(config.kayıt.tag)) {

            member.roles.remove(config.rol.aileRolü)

            tagLog.send({ content: `${member} [\` ${member.id} \`]`, embeds: [embeds.setDescription(`${member} kullanıcısı tagımızı <t:${Math.floor(Date.now() / 1000)}:R> bıraktı.
                
            \`>\` İsim Değişikliği: \` ${oldUser.username}#${oldUser.discriminator} \` => \` ${newUser.username}#${newUser.discriminator} \`
            \`>\` Anlık taglı üye: **${member.guild.members.cache.filter(m => m.user.username.includes(config.kayıt.tag) || m.user.discriminator.includes(config.kayıt.etiketTag)).size}**
            `)]})

        } else if(!oldUser.username.includes(config.kayıt.tag) && newUser.username.includes(config.kayıt.tag)) {

            member.roles.add(config.rol.aileRolü)

            tagLog.send({ content: `${member} [\` ${member.id} \`]`, embeds: [embeds.setDescription(`${member} kullanıcısı tagımızı alarak <t:${Math.floor(Date.now() / 1000)}:R> aramıza katıldı.
                
            \`>\` İsim Değişikliği: \` ${oldUser.username}#${oldUser.discriminator} \` => \` ${newUser.username}#${newUser.discriminator} \`
            \`>\` Anlık taglı üye: **${member.guild.members.cache.filter(m => m.user.username.includes(config.kayıt.tag) || m.user.discriminator.includes(config.kayıt.etiketTag)).size}**
            `)]})

        }

        if(oldUser.discriminator == (config.kayıt.etiketTag) && newUser.discriminator !== (config.kayıt.etiketTag)) {

            member.roles.remove(config.rol.aileRolü)

            tagLog.send({ content: `${member} [\` ${member.id} \`]`, embeds: [embeds.setDescription(`${member} kullanıcısı tagımızı <t:${Math.floor(Date.now() / 1000)}:R> bıraktı.
                
            \`>\` İsim Değişikliği: \` ${oldUser.username}#${oldUser.discriminator} \` => \` ${newUser.username}#${newUser.discriminator} \`
            \`>\` Anlık taglı üye: **${member.guild.members.cache.filter(m => m.user.username.includes(config.kayıt.tag) || m.user.discriminator.includes(config.kayıt.etiketTag)).size}**
            `)]})

    } else if(oldUser.discriminator !== (config.kayıt.etiketTag) && newUser.discriminator == (config.kayıt.etiketTag)) {

        member.roles.add(config.rol.aileRolü);

        tagLog.send({ content: `${member} [\` ${member.id} \`]`, embeds: [embeds.setDescription(`${member} kullanıcısı tagımızı alarak <t:${Math.floor(Date.now() / 1000)}:R> aramıza katıldı.
            
        \`>\` İsim Değişikliği: \` ${oldUser.username}#${oldUser.discriminator} \` => \` ${newUser.username}#${newUser.discriminator} \`
        \`>\` Anlık taglı üye: **${member.guild.members.cache.filter(m => m.user.username.includes(config.kayıt.tag) || m.user.discriminator.includes(config.kayıt.etiketTag)).size}**
        `)]})

    }

    },
};