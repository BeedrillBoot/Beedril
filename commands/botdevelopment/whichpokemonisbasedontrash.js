module.exports = {
	cooldown: 1,
	help: ` shows Which Pokemon is Based on Trash`,
	permissions: 'admin',
	commandFunction: function (Bot, room, time, by, args, client) {
		Bot.say(room, ` Trubbish And Garbodor >.>`);
	}
}