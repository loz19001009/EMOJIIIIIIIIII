const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('listemojis')
        .setDescription('Liệt kê tất cả các emoji trong máy chủ'),
    async execute(interaction) {
        const emojis = interaction.guild.emojis.cache.map(emoji => {
            return `${emoji} - \`<:${emoji.name}:${emoji.id}>\``;
        }).join('\n');

        const embed = new EmbedBuilder()
            .setTitle('Danh Sách Emoji')
            .setDescription(emojis || 'Không tìm thấy emoji nào')
            .setColor('#0099ff');

        await interaction.reply({ embeds: [embed] });
    },
};
