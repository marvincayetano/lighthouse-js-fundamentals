const finalPosition = function (moves) {
    let x = 0;
    let y = 0;

    moves.forEach(move => {
      if(move === 'north') {
        x += 1;
      } else if(move === 'east') {
        y += 1;
      } else if(move === 'south') {
        x -= 1;
      } else if(move === 'west') {
        y -= 1;
      }
    });

   return [x, y];
  }

  const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

  console.log(finalPosition(moves));