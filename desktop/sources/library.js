function Library(lapel) {

  const tone = require('tone')

  // Modularity: Write simple parts connected by clean interfaces.
  // Composition: Design programs to be connected to other programs.
  // Parsimony: Write a big program only when it is clear by demonstration that nothing else will do.
  this.lapel = lapel

  // Synth

  this.synth = (wav) => {
    const syn = new Synth(wav)
    return syn
  }

  this.note = (synth, note) => {
    synth.playNote(note)
  }

  this.setl = (synth, length) => {
    synth.setNoteLength(length)
  }

  this.play = () => {
    tone.Transport.start();
  }

  this.setadsr = (synth, att, dec, sus, rel) => {
    synth.envelope.attack = att
    synth.envelope.decay = dec
    synth.envelope.sustain = sus
    synth.envelope.release = rel
  }

  this.setad = (synth, att, dec) => {
    synth.envelope.attack = att
    synth.envelope.decay = dec
  }

  // note convert

  this.mton = (midi) => { // midi note to note name
    let oct = Math.floor(midi / 12)
    var note = ""
    switch (midi % 12) {
      case 0: note = "c";
        break;
      case 1: note = "c#";
        break;
      case 2: note = "d";
        break;
      case 3: note = "d#";
        break;
      case 4: note = "e";
        break;
      case 5: note = "f";
        break;
      case 6: note = "f#";
        break;
      case 7: note = "g";
        break;
      case 8: note = "g#";
        break;
      case 9: note = "a";
        break;
      case 10: note = "a#";
        break;
      case 11: note = "b";
        break;
    }
    return note + oct
  }

  // Time

  this.wait = (s, fn) => {
    setTimeout(fn , s * 1000)
  }

  // str

  this.substr = (str, from, len) => {
    return `${str}`.substr(from, len)
  }

  this.split = (str, char) => {
    return `${str}`.split(char)
  }

  this.replace = (str, from, to) => {
    return `${str}`.replaceAll(from, to)
  }

  this.lc = (str) => {
    return `${str}`.toLowerCase()
  }

  this.tc = (str) => {
    return `${str}`.toTitleCase()
  }

  this.uc = (str) => {
    return `${str}`.toUpperCase()
  }

  this.cc = (str) => {
    return `${str}`.substr(0, 1).toUpperCase() + str.substr(1)
  }

  // Math

  this.add = (...args) => { // Adds values.
    return args.reduce((sum, val) => sum + val)
  }

  this.sub = (...args) => { // Subtracts values.
    return args.reduce((sum, val) => sum - val)
  }

  this.mul = (...args) => { // Multiplies values.
    return args.reduce((sum, val) => sum * val)
  }

  this.div = (...args) => { // Divides values.
    return args.reduce((sum, val) => sum / val)
  }

  this.mod = (a, b) => { // Returns the modulo of a and b.
    return a % b
  }

  this.rad = (degrees) => { // Convert radians to degrees.
    return degrees * (Math.PI / 180)
  }

  this.deg = (radians) => { // Convert degrees to radians.
    return radians * (180 / Math.PI)
  }

  this.clamp = (val, min, max) => { // Clamps a value between min and max.
    return this.min(max, this.max(min, val))
  }

  this.step = (val, step) => {
    return this.round(val / step) * step
  }

  this.min = Math.min // Returns lowest value.

  this.max = Math.max // Returns highest value.

  this.ceil = Math.ceil // Rounds up to the nearest integer.

  this.floor = Math.floor // Rounds down to the nearest integer.

  this.round = Math.round // Rounds to the nearest integer

  this.sin = Math.sin

  this.cos = Math.cos

  this.log = Math.log

  this.pow = Math.pow

  this.sqrt = Math.sqrt // Calculate the square root.

  this.sq = (a) => { // Calculate the square.
    return a * a
  }

  this.PI = Math.PI

  this.TWO_PI = Math.PI * 2

  this.random = (...args) => {
    if (args.length >= 2) {
      // (random start end)
      return args[0] + Math.random() * (args[1] - args[0])
    } else if (args.length === 1) {
      // (random max)
      return Math.random() * args[0]
    }
    return Math.random()
  }

  // Logic

  this.gt = (a, b) => { // Returns true if a is greater than b, else false.
    return a > b
  }

  this.lt = (a, b) => { // Returns true if a is less than b, else false.
    return a < b
  }

  this.eq = (a, b) => { // Returns true if a is equal to b, else false.
    return a === b
  }

  this.and = (...args) => { // Returns true if all conditions are true.
    for (let i = 0; i < args.length; i++) {
      if (!args[i]) {
        return args[i]
      }
    }
    return args[args.length - 1]
  }

  this.or = (a, b, ...rest) => { // Returns true if at least one condition is true.
    let args = [a, b].concat(rest)
    for (let i = 0; i < args.length; i++) {
      if (args[i]) {
        return args[i]
      }
    }
    return args[args.length - 1]
  }

  // Arrays

  this.each = async (arr, fn) => { // Run a function for each element in a list.
    for (let i = 0; i < arr.length; i++) {
      const arg = arr[i]
      await fn(arg)
    }
  }

  this.map = (arr, fn) => { // Run a function on each element in a list.
    return Promise.all(arr.map(fn)).then(result => { return result })
  }

  this.filter = (arr, fn) => { // Remove from list, when function returns false.
    const list = Array.from(arr)
    return Promise.all(list.map((element, index) => fn(element, index, list)))
      .then(result => {
        return list.filter((_, index) => {
          return result[index]
        })
      })
  }

  this.reduce = async (arr, fn, acc) => {
    const length = arr.length
    let result = acc === undefined ? subject[0] : acc
    for (let i = acc === undefined ? 1 : 0; i < length; i++) {
      result = await fn(result, arr[i], i, arr)
    }
    return result
  }

  this.len = (item) => { // Returns the length of a list.
    return item.length
  }

  this.first = (arr) => { // Returns the first item of a list.
    return arr[0]
  }

  this.last = (arr) => { // Returns the last
    return arr[arr.length - 1]
  }

  this.rest = ([_, ...arr]) => {
    return arr
  }

  this.range = (start, end, step = 1) => {
    let arr = []
    if (step > 0) {
      for (let i = start; i <= end; i += step) {
        arr.push(i)
      }
    } else {
      for (let i = start; i >= end; i += step) {
        arr.push(i)
      }
    }
    return arr
  }

  // Objects

  this.get = (item, key) => { // Gets an object's parameter with name.
    return item[key]
  }

  this.set = (item, ...args) => { // Sets an object's parameter with name as value.
    for (let i = 0; i < args.length; i += 2) {
      const key = args[i]
      const val = args[i + 1]
      item[key] = val
    }
    return item
  }

  this.of = (h, ...keys) => { // Gets object parameters with names.
    return keys.reduce((acc, key) => {
      return acc[key]
    }, h)
  }

  this.keys = (item) => { // Returns a list of the object's keys
    return Object.keys(item)
  }

  this.values = (item) => { // Returns a list of the object's values
    return Object.values(item)
  }

  // File System

  this.dir = (path = this.dirpath()) => { // Returns the content of a directory.
    return fs.existsSync(path) ? fs.readdirSync(path) : []
  }

  this.file = (path = this.filepath()) => { // Returns the content of a file.
    return fs.existsSync(path) ? fs.readFileSync(path, 'utf8') : ''
  }

  this.dirpath = (path = this.filepath()) => { // Returns the path of a directory.
    return require('path').dirname(path)
  }

  this.filepath = (path = ronin.source.path) => { // Returns the path of a file.
    return path
  }

  this.dirname = (path = this.filepath()) => { // Returns the name of a folder.
    return require('path').basename(require('path').dirname(path))
  }

  this.filename = (path = this.filepath()) => { // Returns the name of a file.
    return require('path').parse(path).name
  }

  this.debug = (arg) => { // Print arguments to console.
    console.log(arg)
    return arg
  }

  this.time = (rate = 1) => { // Returns timestamp in milliseconds.
    return (Date.now() * rate)
  }

  this.js = () => { // Javascript interop.
    return window
  }

  this.on = (event, f) => { // Triggers on event.
    ronin.bind(event, f)
  }

  this.test = (name, a, b) => {
    if (`${a}` !== `${b}`) {
      console.warn('failed ' + name, a, b)
    } else {
      console.log('passed ' + name, a)
    }
    return a === b
  }

  this.benchmark = async (fn) => { // Logs time taken to execute a function.
    const start = Date.now()
    const result = await fn()
    console.log(`time taken: ${Date.now() - start}ms`)
    return result
  }

}
