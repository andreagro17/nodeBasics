const deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneracion',
  // edad: 50
  getNombre() {
    return `${this.nombre} ${this.apellido} ${this.poder}`
  }
}

// console.log(deadpool.getNombre())

// const nombre    = deadpool.nombre 
// const apellido  = deadpool.apellido
// const poder     = deadpool.poder

// const {nombre, apellido, poder, edad = 0} = deadpool
// console.log(nombre, apellido, poder, edad)

function imprimeHeroe ( {nombre, apellido, poder, edad = 0} ) {
  // const {nombre, apellido, poder, edad = 0} = deadpool
  console.log(nombre, apellido, poder, edad)
}

imprimeHeroe( deadpool)

const heroes = ['batman', 'antman', 'spiderman']

const [,,h3] = heroes
console.log(h3)