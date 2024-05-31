const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('uptime')
        .setDescription('Kiểm tra thời gian hoạt động của bot'),
    async execute(interaction) {
        const uptime = process.uptime();
        const hours = Math.floor(uptime / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = Math.floor(uptime % 60);

        const embed = new EmbedBuilder()
            .setTitle('Thời Gian Hoạt Động')
            .setDescription(`${hours} giờ ${minutes} phút ${seconds} giây`)
            .setColor('#0099ff');

        await interaction.reply({ embeds: [embed] });
    },
};
