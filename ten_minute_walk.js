// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
  //insert brilliant code here
var n = 0;
var s = 0;
var e = 0;
var w = 0;

  for( var i = 0; i<walk.length; i++){
    if (walk[i] === 'n'){
      n++;
    }
      if (walk[i] === 's'){
      s++;
    }
      if (walk[i] === 'e'){
      e++;
    }
      if (walk[i] === 'w'){
      w++;
    }
  }

  if (walk.length === 10 && n === s && e === w){
  return true;
  } else {
  return false;
  }
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
console.log(isValidWalk(['w']));
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));

// alternate answer

// function isValidWalk(walk) {
//   const north = walk.filter(item => { return item === "n" }).length;
//   const south = walk.filter(item => { return item === "s" }).length;
//   const east = walk.filter(item => { return item === "e" }).length;
//   const west = walk.filter(item => { return item === "w" }).length;

//   return walk.length === 10 && north === south && east === west;
// }