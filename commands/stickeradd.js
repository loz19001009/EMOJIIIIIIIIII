const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stickeradd')
        .setDescription('Thêm một sticker mới vào máy chủ')
        .addStringOption(option =>
            option.setName('sticker')
                .setDescription('URL của sticker')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('name')
                .setDescription('Tên cho sticker')
                .setRequired(true)),
    async execute(interaction) {
        const stickerUrl = interaction.options.getString('sticker');
        const stickerName = interaction.options.getString('name');

        try {
            const sticker = await interaction.guild.stickers.create({
                file: stickerUrl,
                name: stickerName,
                tags: 'sticker',
            });

            const embed = new EmbedBuilder()
                .setTitle('Sticker Đã Được Thêm')
                .setDescription(`Đã thêm thành công sticker với tên \`${sticker.name}\``)
                .setColor('#0099ff');

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Thêm sticker thất bại.', ephemeral: true });
        }
    },
};
