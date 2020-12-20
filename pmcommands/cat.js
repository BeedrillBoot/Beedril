module.exports = {
  cooldown: 1,
  help: `Shows a cat.`,
  permissions: "gamma",
  commandFunction: function(Bot, pm, time, by, args, client) {
    Bot.say(
      pm,
      `!show https://i.ibb.co/Hqdn49Q/image.png`
    );
  }
};
