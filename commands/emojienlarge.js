const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('emojienlarge')
        .setDescription('Phóng to một emoji')
        .addStringOption(option =>
            option.setName('emoji')
                .setDescription('Emoji cần phóng to')
                .setRequired(true)),
    async execute(interaction) {
        const emoji = interaction.options.getString('emoji');
        const customEmoji = interaction.client.emojis.cache.find(e => e.toString() === emoji);

        if (customEmoji) {
            const embed = new EmbedBuilder()
                .setTitle(`:${customEmoji.name}:`)
                .setImage(customEmoji.url)
                .setColor('#0099ff');

            await interaction.reply({ embeds: [embed] });
        } else {
            // Xử lý emoji chuẩn
            const emojiRegex = /<a?:\w+:(\d+)>/;
            const match = emoji.match(emojiRegex);
            if (match) {
                const emojiId = match[1];
                const emojiUrl = `https://cdn.discordapp.com/emojis/${emojiId}.png?v=1`;

                const embed = new EmbedBuilder()
                    .setTitle('Emoji Phóng To')
                    .setImage(emojiUrl)
                    .setColor('#0099ff');

                await interaction.reply({ embeds: [embed] });
            } else {
                await interaction.reply({ content: 'Không tìm thấy emoji hoặc không phải là emoji tùy chỉnh.', ephemeral: true });
            }
        }
    },
};

