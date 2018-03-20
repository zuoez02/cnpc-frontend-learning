const star = i => console.log(' '.repeat(5 - i) + '*'.repeat(i * 2 + 1) + ' '.repeat(5 - i));
for (let i = 0; i < 5; i++) {
  star(i);
}
for (let i = 5; i >=0; i--) {
  star(i);
}
