const cosasQueAprendimos = [
  {
    tema: 'terminal',
    class: '',
  },
  {
    tema: 'node',
    class: '',
  },
  {
    tema: 'oop',
    class: '',
  },
  {
    tema: 'flexbox',
    class: '',
  },
  {
    tema: 'css',
    class: '',
  },
  {
    tema: 'dom',
    class: 'special',
  },
];

const lista = document.querySelector('ul');

// const li = document.createElement('li'); // me crea un elemento
// li.classList.add('') // agrega una clase a ese item
// li.innerText = 'poo' //agrega el contenido o sea el texto de esa etiqueta. el innerText es una propiedad

function main() {
  for (let i = 0; i < cosasQueAprendimos.length; i++) {
    const li = document.createElement('li');
    li.className = (cosasQueAprendimos[i].class);
    li.innerText = cosasQueAprendimos[i].tema;
    lista.appendChild(li)
  }
}

main();
