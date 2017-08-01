const Telegraf = require('../')

const bot = new Telegraf(339280148:AAG2s7Jjh6CQcWsj4ffGo2EllkwLLf0i2Q)

// Set telegram webhook
// npm install -g localtunnel && lt --port 3000
bot.telegram.setWebhook('https://--------.localtunnel.me/secret-path')

// Start https webhook
// FYI: First non-file reply will be served via webhook response
bot.startWebhook('/secret-path', null, 3000)

bot.on('text', ({ reply }) => reply('Hey there!'))
