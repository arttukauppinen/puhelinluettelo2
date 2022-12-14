const mongoose = require('mongoose')
const process= 0
if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url =
  `mongodb+srv://fullstack:${password}@puhelinluettelo.zdsfsoz.mongodb.net/puhelinluettelo?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

// eslint-disable-next-line no-empty-pattern
const person = {} = new Person({
  name: name,
  number: number,
})

if (!name && !number) {
  Person.find({}).then(result => {
    result.forEach(people => {
      console.log(people)
    })
    mongoose.connection.close()
  })

} else if (name && number) {
  person.save().then(() => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}