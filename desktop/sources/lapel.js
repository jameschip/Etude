'use strict'

const Tone = require('tone')

class Lapel {

    constructor() {
        this.code = document.getElementById("input-area")
        this.synths = []
        this.lisp = new Lisp(new Library(this))
    }

    /**
     * Run the LISP interpreter on the input
     */
    run() {
        // console.log(this.code.value)
        this.lisp.run(this.code.value)
    }

    
    playNote(synth, note, length) {
        synth.triggerAttackRelease(note, length)
    }

}