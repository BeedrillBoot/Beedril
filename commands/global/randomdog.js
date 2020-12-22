module.exports = {
  cooldown: 1,
  help: `Shows a dog.`,
  permissions: "gamma",
  commandFunction: function(Bot, room, time, by, args, client) {
    var cats = [
      "https://www.cutenessoverflow.com/wp-content/uploads/2014/02/Little-Cute-Puppy-1600x1200.jpg",
      "http://2.bp.blogspot.com/-d_kcGR6Mxys/UH0-J16GpAI/AAAAAAAAHMg/6zo9LKtmzS8/s1600/36Dog-Puppys.jpg",
      "https://i.ibb.co/FV7MLJw/image.png",
      "https://i.ibb.co/TPBxfDw/image.png"
    ]; //you can add more images by doing ["link", "2mdlinl", "3rd"....]

    Bot.say(
      room,
      `/adduhtml catty,<img src="${
        cats[Math.floor(Math.random() * cats.length)]
      }" alt="puppy" style="width:300; height:250;" width="300" height="250">`
    );
  }
};
