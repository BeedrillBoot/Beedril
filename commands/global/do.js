module.exports = {
    cooldown: 10,
    help: `Does stuff.`,
    permissions: 'coder',
    commandFunction: function (Bot, room, time, by, args, client) {
        Bot.say(room, `${!args[0]?'/me does nothing':args.join(' ')}`);
    }
}