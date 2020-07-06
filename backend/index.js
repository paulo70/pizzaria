const express    = require('express')
const bodyParser = require('body-parser')
const cors       = require('cors')

const app  = express()
const port = 3001

app.use(cors())
app.use(bodyParser.json())

const dough = [
  {
      id: 1,
      mass:  "integral",
      description_mass: "Massa Integral"
  },
  {
      id: 2,
      mass: 'caseira',
      description_mass: 'Massa Caseira'
  },
  {
      id: 3,
      mass: 'vegan',
      description_mass: 'Massa Vegan'
  }
]

const sizes = [
  {
    id: 1,
    size: 'familia',
    description_size: 'Tamanho Familia'
  },
  {
    id: 2,
    size: 'tradicional',
    description_size: 'Tamanho Tradicional'
  },
  {
    id: 3,
    size: 'broto',
    description_size: 'Tamanho Broto'
  },
  {
    id: 4,
    size: 'brotinho',
    description_size: 'Tamanho Brotinho'
  }
]

const fill = [
  {
    id: 1,
    fill: 'catupiry',
    description_fill: 'Recheio de catupiry com bacon',
  },
  {
    id: 2,
    fill: 'calabresa',
    description_fill: 'Recheio de calabresa com cebola',
  },

  {
    id: 3,
    fill: 'peperoni',
    description_fill: 'Recheio de peperoni',
  }
]

const recomend = [
  {
    id:1,
    name: 'Pizza da casa',
    isrecomend: true.
    points: 20
  }
]

app.get('/mass', (req, res) => {
  res.json(dough)
});

app.get('/size', (req, res) => {
  res.json(sizes)
})

app.get('/fill', (req, res) => {
  res.json(fill)
})

app.get('/recomend', (req, res) => {
  resp.json(recomend)
})

app.listen(port, ()=> console.log(`Start Server at at ${port}`))
