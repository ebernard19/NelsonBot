module.exports = {
  main: function (message) {
    message.channel.send("Pong !");
  },
  help: function (message) {
    console.log('ok');
    channel.send({
      embed: {
        color: 3447003,
        title: 'Ping',
        description: 'Répond pong!'
      }
    });
  }
}
