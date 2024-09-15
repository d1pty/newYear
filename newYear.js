const now = new Date();
const nextNewYear = new Date(now.getFullYear() + 1, 0, 1);

const diff = nextNewYear - now;
const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((diff % (1000 * 60)) / 1000);

console.log(`До Нового года осталось: ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`);
