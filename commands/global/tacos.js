module.exports = {
  cooldown: 1,
  help: `Wiki?.`,
  permissions: "gamma",
  commandFunction: function(Bot, room, time, by, args, client) {
    Bot.say(
      room,
      `**Taco**- Un taco est un antojito (en-cas) de la cuisine mexicaine qui se compose d'une tortilla de maïs repliée ou enroulée sur elle-même contenant presque toujours une garniture le plus souvent à base de viande, de sauce, d'oignon et de coriandre fraiche hachée .`
    );
  }
};
