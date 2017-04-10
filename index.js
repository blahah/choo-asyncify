// monkey-patch choo's nanobus emitter
// so that every event is async with setImmediate() / setTimeout(fn, 0)
var asyncify = setImmediate || function (fn) { setTimeout(fn, 0) }

module.exports = function (state, emitter) {
  var _emit = emitter.emit

  emitter.emit = function (eventName, data) {
    var self = this
    var args = arguments
    asyncify(function() { _emit.apply(self, args) })
  }
}
