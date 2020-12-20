module.exports = {
	cooldown: 5,
	help: `/me dances`,
	permissions: 'gamma',
	commandFunction: function (Bot, room, time, by, args, client) {
		Bot.say(room, ``);
	}
}