const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Kiểm tra ping của bot'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Ping')
            .setDescription(`Pong! ${interaction.client.ws.ping}ms`)
            .setColor('#0099ff');

        await interaction.reply({ embeds: [embed] });
    },
};
