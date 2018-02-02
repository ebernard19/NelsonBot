const Discord = require('discord.js')
const config = require("./config.json")
const modules = require('./modules/index')

const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.on('message', function(message) {
  
  // On sort directement si le bot n'est pas appelé
  if (!message.content.startsWith(config.prefix)) {
    return;
  }

  if (message.content.startsWith(config.prefix + "ping")) {
    modules.ping(message);
  } else {
    if (message.content.startsWith(config.prefix + "lance")) {
      modules.alea(message, config);
    }
  }
})

bot.login(config.token)