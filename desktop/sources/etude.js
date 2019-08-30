'use strict'

const Tone = require('tone')

class Etude {

    constructor() {
        this.code = document.getElementById("input-area")
        this.synths = []
        this.lisp = new Lisp(new Library(this))
    }

    run() {
        this.lisp.run(this.code.value)
    }

    
    playNote(synth, note, length) {
        synth.triggerAttackRelease(note, length)
    }

}