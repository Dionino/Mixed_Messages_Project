let greetings = ["Hello", "Good morning", "Good evening", "Good afternoon"];
let randomMessage = Math.floor(Math.random() * 6);
let mixedMessages = "";

switch (randomMessage) {
  case 0:
  mixedMessages = "You look beautiful today! Rise and shine."
  break;
  case 1:
  mixedMessages = "Smile, Life is too short to be sad :)"
  break;
  case 2:
  mixedMessages = "Don't worry, everything's will be fine."
  break;
  case 3:
  mixedMessages = "If life gives you lemons, make a lemonade!"
  break;
  case 4:
  mixedMessages = "Love yourself, no one is like you!"
  break;
  case 5:
  mixedMessages = "Don't judge a book by it's cover."
}

let dayTime = new Date();
let dayHours = dayTime.getHours();
let dayMinutes = dayTime.getMinutes();
function greet() {
if (dayHours >= 8) {
  return greetings[1];
} else if (dayHours >= 12) {
  return greetings[3]
} else if (dayHours >= 18) {
  return greetings[2]
} else {
  return greetings[0]
}
};

console.log(greet() + `! ${mixedMessages}`);
