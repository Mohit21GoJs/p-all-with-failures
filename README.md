# p-all-with-failures
A wrapper for using promise all with failures.

[![Build Status](https://travis-ci.org/Mohit21GoJs/p-all-with-failures.svg?branch=master)](https://travis-ci.org/Mohit21GoJs/p-all-with-failures)

### For running locally ###
`yarn install`

### For running tests ###
`yarn test`

### Usage ###

Pass in array of objects having key `func` as a thennable and `failureCb` as a callback function which can operate on error passed in if promise fails.

#### For example ####

`[{ func: Promise.resolve({some: 'value'})}, { func: Promise.reject({ message: 'Error'}), failureCb: (err) => err.message}] returns [{some: 'value'}, 'Error']` 

If we were to use Promise.all with . `[Promise.resolve({some: 'value'}), Promise.reject({ message: 'Error'})]` would result in rejection with error message.
