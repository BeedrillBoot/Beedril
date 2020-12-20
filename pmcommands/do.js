module.exports = {
	help: `Does stuff.`,
	permissions: 'coder',
	commandFunction: function (Bot, by, args, client) {
		Bot.pm(by, `${args.join(' ')}`);
	}
}