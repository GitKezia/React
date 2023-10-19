import animals from './animals';

const filteredAnimals = animals.filter(animal => {
  return animal.age > 20;
});

console.log(filteredAnimals);

let toPrint = '';

filteredAnimals.forEach(animal => {
  toPrint += animal.animal + ', ';
});

let sumAnimalAge = filteredAnimals.reduce((prev, next) => {
  return { age: prev.age + next.age };
}, { age: 0 }); 



document.getElementById('root').innerHTML = toPrint + '<br> Soma das idades selecionadas: ' + sumAnimalAge.age;