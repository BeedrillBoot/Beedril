module.exports = {
	cooldown: 1,
	help: `Duck killed you! x_x`,
	permissions: 'gamma',
	commandFunction: function (Bot, room, time, by, args, client) {
		Bot.say(room, `/adduhtml catty,<img src="https://media.tenor.com/images/86fbc163735e1e0607be7ec9d4df00b0/tenor.gif" alt="Ducky" width="284" height="193">`);
	}
}