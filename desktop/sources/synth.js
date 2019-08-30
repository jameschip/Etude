

function Synth(shape) {
    this.Tone = require('tone')
    
    this.synth = new Tone.Synth({
        oscillator: {
          type: shape
        }
      }).toMaster()
    
    this.length = "8n"

    this.setNoteLength = (len) => {
        this.length = len
    }
    
    this.playNote = (note) => {
        this.synth.triggerAttackRelease(note, this.length)
    }

    this.setADSR = (attack, decay, sustain, release) => {
        this.synth.envelope.attack = attack
        this.synth.envelope.decay = decay
        this.synth.envelope.sustain = sustain
        this.synth.envelope.release = release
    }

    this.snote = (note, time) => {
        Tone.Transport.schedule((t) => {
            this.synth.triggerAttackRelease(note, this.length, t)
        }, "+" + time)
    }

}