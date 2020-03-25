'use strict'

const PersonBuilder = require('./lib/PersonBuilder')

// Build Employees
const james = new PersonBuilder('James')
  .makeManager(60)
  .build()
const mary = new PersonBuilder('Mary')
  .makeEmployee()
  .build()

// Build Customers
const john = new PersonBuilder('John')
  .hasMoney(500)
  .wantsToBuy(['Milk', 'Bread', 'Chocolate']) // knows what to buy
  .build()

const patricia = new PersonBuilder('Patricia')
  .hasMoney(600)
  .build()

console.log('===== Employee =====')
console.log(james.toString())
console.log(mary.toString())

console.log('===== Customers =====')
console.log(john.toString())
console.log(patricia.toString())
