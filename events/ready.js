const { joinVoiceChannel } = require("@discordjs/voice");
const config = require("../config.json")
module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        const VoiceChannel = client.channels.cache.get(config.voiceChannelID);
        joinVoiceChannel({
            channelId: VoiceChannel.id,
            guildId: VoiceChannel.guild.id,
            adapterCreator: VoiceChannel.guild.voiceAdapterCreator,
            selfDeaf: true
        });
        console.log(`${client.user.tag} başarıyla aktif edildi.`);

        client.user.setActivity("Deneme 💜 Kira")

        await client.user.setStatus("idle")

    },
};