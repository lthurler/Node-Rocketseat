const { EventEmitter } = require('events')

const ev = new EventEmitter()

ev.on('evento', (message) => {
    console.log('Ouvi o evento, ', message)
})

ev.once('evento', (message) => {
    console.log('Ouvi uma vez, ', message)
})

ev.emit('evento', "Leandro")
ev.emit('evento', "Outra coisa")
