module.exports = {
	cooldown: 1,
	help: ` shows Hi`,
	permissions: 'admin',
	commandFunction: function (Bot, room, time, by, args, client) {
		Bot.say(room, ` Hi`);
	}
}