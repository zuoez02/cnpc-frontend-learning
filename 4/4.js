const generateCard = (type, number) => {
  return {
    type,
    number,
  };
};

const spade = []; // 黑桃
const heart = []; // 红桃
const diamond = []; // 方片
const club = []; // 草花

for (let i = 1; i <= 13; i++) {
  spade.push(generateCard('spade', i));
  heart.push(generateCard('heart', i));
  diamond.push(generateCard('diamond', i));
  club.push(generateCard('club', i));
}

const suits = ['spade', 'heart', 'diamond', 'club'];

const newList = [];

while (spade.length > 0
  && heart.length > 0
  && diamond.length > 0
  && club.length > 0
) {
  const suit =suits[Math.floor(Math.random() * 3)]; 
  console.log(suit);
  switch (suit) {
    case 'spade': newList.push(spade.shift()); break;
    case 'heart': newList.push(heart.shift()); break;
    case 'diamond': newList.push(diamond.shift()); break;
    case 'club': newList.push(club.shift()); break;
  }
}

newList.forEach((card) => {
  console.log(`${card.type} ---> ${card.number}`);
});
