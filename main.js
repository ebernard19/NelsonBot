const Discord = require('discord.js')
const security = require("./security.json")
const modules = require('./modules/index')

const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.on('message', function(message) {
  
  // On sort directement si le bot n'est pas appelé
  if (!message.content.startsWith(security.prefix)) {
    return;
  }

  if (message.content.startsWith(security.prefix + "ping")) {
    modules.ping.main(message);
  } else if (message.content.startsWith(security.prefix + "help")) {
    modules.help(message);
  }
})

bot.login(security.token)