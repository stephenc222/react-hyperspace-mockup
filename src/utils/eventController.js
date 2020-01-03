const internal = {}

const eventController = {
  on(event, listener, { verbose = false } = {}) {
    verbose && console.log('on event', { event, listener })
    if (!internal.listeners) {
      verbose && console.log('first on call')
      internal.listeners = {}
    }
    if (!internal.listeners[event]) {
      verbose && console.log('first on call for event', { event })
      internal.listeners[event] = []
    }
    const id = internal.listeners[event].length
    verbose && console.log('adding to event slot', { id })
    internal.listeners[event].push({ id, listener })
    return {
      off() {
        const index = internal.listeners[event].findIndex(x => x.id === id)
        if (index >= 0) {
          verbose && console.log('event off', { id, index })
          internal.listeners[event].splice(index, 1)
          !internal.listeners[event].length && (() => {
            verbose && console.log('no more listeners for event, removing event slot')
            delete internal.listeners[event]
          })()
        }
      }
    }
  },
  dispatch(event, { verbose = false, args = [] } = {}) {
    setTimeout(() => {
      verbose && console.log('dispatch event', { event, args })
      if (!internal.listeners) {
        verbose && console.log('no listeners')
        return
      }
      if (!internal.listeners[event]) {
        verbose && console.log('no listeners for event', { event })
        return
      }
      internal.listeners[event].forEach(({ id, listener }) => {
        if (typeof listener === 'function') {
          verbose && console.log('calling listener for event', { event, id, listener, args })
          listener(...args)
        }
      })
    }, 0)
  },
}

export default eventController