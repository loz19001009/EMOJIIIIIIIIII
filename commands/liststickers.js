const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('liststickers')
        .setDescription('Liệt kê tất cả các sticker trong máy chủ'),
    async execute(interaction) {
        const stickers = interaction.guild.stickers.cache.map(s => `${s} - \`${s.name}\``).join('\n');

        const embed = new EmbedBuilder()
            .setTitle('Danh Sách Sticker của Máy Chủ')
            .setDescription(stickers || 'Không tìm thấy sticker nào') // Đảm bảo mô tả không trống
            .setColor('#0099ff');

        await interaction.reply({ embeds: [embed] });
    },
};
