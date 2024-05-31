const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Liệt kê tất cả các lệnh'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Trợ Giúp - Danh Sách Lệnh')
            .setDescription('Dưới đây là các lệnh có sẵn:')
            .addFields(
                { name: '😃 /listemojis', value: 'Liệt kê tất cả emoji trong máy chủ', inline: true },
                { name: '➕ /emojiadd [emoji]', value: 'Thêm một emoji mới vào máy chủ', inline: true },
                { name: '🔍 /emojienlarge [emoji]', value: 'Phóng to một emoji cụ thể', inline: true },
                { name: '🕵️ /emojisteal [liên kết tin nhắn]', value: 'Đánh cắp một emoji từ liên kết tin nhắn', inline: true },
                { name: '➕ /stickeradd [sticker]', value: 'Thêm một sticker mới vào máy chủ', inline: true },
                { name: '🎟️ /liststickers', value: 'Liệt kê tất cả sticker trong máy chủ', inline: true },
                { name: 'ℹ️ /help', value: 'Hiển thị danh sách các lệnh', inline: true },
                { name: '⏱️ /uptime', value: 'Kiểm tra thời gian hoạt động của bot', inline: true },
                { name: '🏓 /ping', value: 'Kiểm tra độ trễ của bot', inline: true }
            )
            .setColor('#0099ff')
            .setFooter({ text: 'Quản Lý Emoji Được Tạo Bởi Friday', iconURL: 'https://cdn3.emoji.gg/emojis/6307-management.png' }); // Thêm một URL icon phù hợp cho bot của bạn

        await interaction.reply({ embeds: [embed] });
    },
};

