const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('emojisteal')
        .setDescription('Đánh cắp một emoji từ một liên kết tin nhắn')
        .addStringOption(option =>
            option.setName('message_link')
                .setDescription('Liên kết đến tin nhắn chứa emoji')
                .setRequired(true)),
    async execute(interaction) {
        const messageLink = interaction.options.getString('message_link');
        const linkParts = messageLink.split('/');

        if (linkParts.length !== 7) {
            await interaction.reply({ content: 'Liên kết tin nhắn không hợp lệ.', ephemeral: true });
            return;
        }

        const [guildId, channelId, messageId] = linkParts.slice(4, 7);

        try {
            const channel = await interaction.client.channels.fetch(channelId);
            const message = await channel.messages.fetch(messageId);
            const emojiRegex = /<a?:\w+:(\d+)>/g;
            const emojiMatch = message.content.match(emojiRegex);

            if (!emojiMatch) {
                await interaction.reply({ content: 'Không tìm thấy emoji trong tin nhắn.', ephemeral: true });
                return;
            }

            const emojiId = emojiMatch[0].match(/(\d+)/)[0];
            const emojiUrl = `https://cdn.discordapp.com/emojis/${emojiId}.png?v=1`;

            const embed = new EmbedBuilder()
                .setTitle('Emoji Đã Đánh Cắp')
                .setImage(emojiUrl)
                .setColor('#0099ff');

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Đánh cắp emoji thất bại.', ephemeral: true });
        }
    },
};
