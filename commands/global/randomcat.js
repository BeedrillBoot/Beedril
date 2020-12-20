module.exports = {
  cooldown: 1,
  help: `Shows a cat.`,
  permissions: "gamma",
  commandFunction: function(Bot, room, time, by, args, client) {
    var cats = [
      "https://i.ytimg.com/vi/AIQLBiGUCQ4/maxresdefault.jpg",
      "https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg",
      "https://i.ibb.co/CtDDnxL/image.png",
      "https://cdn1.tedsby.com/tb/large/storage/1/9/4/194941/artist-toy-cat-cute-cats-collection.jpg",
      "https://i.ibb.co/hVfF64x/image.png",
      "https://i.ibb.co/ftN3FpV/image.png"
    ]; //you can add more images by doing ["link", "2mdlinl", "3rd"....]

    Bot.say(
      room,
      `/adduhtml catty,<img src="${
        cats[Math.floor(Math.random() * cats.length)]
      }" alt="catty" style="width:300; height:250;" width="300" height="250">`
    );
  }
};
