'use strict'
/**
 * Person class using builder pattern
 * @module PersonBuilder
 */

const Person = require('./Person')

class PersonBuilder {
  constructor (name) {
    this.name = name
  }

  makeEmployee (hours = 40) {
    this.isEmployee = true
    this.hours = hours
    return this
  }

  makeManager (hours = 40) {
    this.isEmployee = true
    this.isManager = true
    this.hours = hours
    return this
  }

  hasMoney (money) {
    this.money = money
    return this
  }

  wantsToBuy (list = []) {
    this.shoppingList = list
    return this
  }

  build () {
    return new Person(this)
  }
}

module.exports = PersonBuilder
