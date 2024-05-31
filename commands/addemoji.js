const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('emojiadd')
        .setDescription('Thêm một emoji mới vào máy chủ')
        .addStringOption(option =>
            option.setName('emoji')
                .setDescription('URL của emoji')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('name')
                .setDescription('Tên cho emoji')
                .setRequired(true)),
    async execute(interaction) {
        const emojiUrl = interaction.options.getString('emoji');
        const emojiName = interaction.options.getString('name');

        // Đảm bảo URL hợp lệ và trỏ tới một hình ảnh
        if (!emojiUrl.startsWith('http')) {
            await interaction.reply({ content: 'URL không hợp lệ. Vui lòng cung cấp một URL hình ảnh hợp lệ.', ephemeral: true });
            return;
        }

        try {
            const emoji = await interaction.guild.emojis.create({
                attachment: emojiUrl,
                name: emojiName,
            });

            const embed = new EmbedBuilder()
                .setTitle('Đã Thêm Emoji')
                .setDescription(`Đã thêm thành công ${emoji} với tên \`${emoji.name}\``)
                .setColor('#0099ff');

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Thêm emoji thất bại. Đảm bảo URL trỏ tới một tệp hình ảnh hợp lệ.', ephemeral: true });
        }
    },
};


        try {
            const emoji = await interaction.guild.emojis.create({
                attachment: emojiUrl,
                name: emojiName,
            });

            const embed = new EmbedBuilder()
                .setTitle('Emoji Added')
                .setDescription(`Successfully added ${emoji} with the name \`${emoji.name}\``)
                .setColor('#0099ff');

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Failed to add emoji. Ensure the URL points to a valid image file.', ephemeral: true });
        }
    },
};
