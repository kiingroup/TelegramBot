const Telegraf = require('telegraf')
const app = new Telegraf(339280148:AAG2sB7Jjh6CQcWsj4ffGo2EllkwLLf0i2Q)
app.command('start', (ctx) => {
  console.log('start', ctx.from)
  ctx.reply('Welcome!')
})
app.hears('hi', (ctx) => ctx.reply('Hey there!'))
app.on('sticker', (ctx) => ctx.reply('👍'))
app.startPolling()
