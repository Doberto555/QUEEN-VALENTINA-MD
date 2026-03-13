const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    
const helpMessage = `
╔══════════════════════╗
      🤖 *${settings.botName || 'QUEEN VALENTINA-MD'}*
╚══════════════════════╝

┃ 👑 Owner : ${settings.botOwner || 'DevSigma'}
┃ ⚙️ Version : ${settings.version || '3.0.0'}
┃ 📡 Status : Online

╭━━━〔 🌐 GENERAL 〕━━━╮
┃ ⬡ .help / .menu
┃ ⬡ .ping
┃ ⬡ .alive
┃ ⬡ .tts <text>
┃ ⬡ .owner
┃ ⬡ .joke / .quote / .fact
┃ ⬡ .weather / .news
┃ ⬡ .lyrics
╰━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 👮 ADMIN 〕━━━╮
┃ ⬡ .ban
┃ ⬡ .kick
┃ ⬡ .warn
┃ ⬡ .promote
┃ ⬡ .demote
┃ ⬡ .mute / .unmute
┃ ⬡ .delete
┃ ⬡ .tagall
┃ ⬡ .hidetag
┃ ⬡ .antilink
╰━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🔒 OWNER 〕━━━╮
┃ ⬡ .mode public
┃ ⬡ .mode private
┃ ⬡ .clearsession
┃ ⬡ .cleartmp
┃ ⬡ .update
┃ ⬡ .settings
┃ ⬡ .anticall
┃ ⬡ .pmblocker
╰━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🎨 EDITING 〕━━━╮
┃ ⬡ .sticker
┃ ⬡ .remini
┃ ⬡ .removebg
┃ ⬡ .blur
┃ ⬡ .crop
┃ ⬡ .meme
┃ ⬡ .emojimix
╰━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🤖 AI 〕━━━╮
┃ ⬡ .gpt
┃ ⬡ .gemini
┃ ⬡ .imagine
┃ ⬡ .flux
┃ ⬡ .sora
╰━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 📥 DOWNLOADER 〕━━━╮
┃ ⬡ .play
┃ ⬡ .song
┃ ⬡ .video
┃ ⬡ .spotify
┃ ⬡ .ytmp4
┃ ⬡ .instagram
┃ ⬡ .facebook
┃ ⬡ .tiktok
╰━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🎮 GAMES 〕━━━╮
┃ ⬡ .tictactoe
┃ ⬡ .hangman
┃ ⬡ .trivia
┃ ⬡ .truth
┃ ⬡ .dare
╰━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 💻 SYSTEM 〕━━━╮
┃ ⬡ .git
┃ ⬡ .github
┃ ⬡ .repo
┃ ⬡ .script
╰━━━━━━━━━━━━━━━━━━━╯

╔══════════════════════╗
   🚀 *Best Bot in the World*
          By SigmaTech
╚══════════════════════╝
`;

*Join our channel for updates:*`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        const contextInfo = {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363423792937578@newsletter',
                newsletterName: 'QUEEN VALENTINA MD',
                serverMessageId: -1
            }
        };

        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo
            }, { quoted: message });
        } else {
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
