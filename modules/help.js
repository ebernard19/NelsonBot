const modules = require('./index')

module.exports = function(message) {
  var content = message.content.split(' ', 3);

  console.log(content);

  if (content.length == 2) {
    message.channel.send({embed: {
        color: 3447003,
        title: 'Liste des commandes',
        fields: [{
            name: 'ping',
            value: 'ping'
          }, {
            name: 'help',
            value: 'Obtient la liste des commandes.\nUtilisation :\n - help\n - help <nom commande>'
          }
        ]
      }
    });
  } else if (content.length == 3) {
    if (content[2] == 'ping') {
      console.log(modules.ping);
      modules.ping.help(message);
    }
  }  
}