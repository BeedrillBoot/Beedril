module.exports = {
	cooldown: 0.2,
	help: `Says hi in french!`,
	permissions: 'none',
	commandFunction: function (Bot, room, time, by, args, client) {
		Bot.say(room, `**Salut à tous!!**`);
	}
}