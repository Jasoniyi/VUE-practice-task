import { EventEmitter } from 'events'

const eventEmitter = new EventEmitter();


// listen to the event
eventEmitter.on('myEvent', () => {
    console.log('Data Received');
});

// publish an event
eventEmitter.emit('myEvent');
