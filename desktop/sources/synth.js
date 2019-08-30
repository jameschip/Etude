

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
        synth.envelope.attack = attack
        synth.envelope.decay = decay
        synth.envelope.sustain = sustain
        synth.envelope.release = release
    }

    this.scheduleNote = (note, time) => {
        Tone.Transport.schedule(function(t) {
            synth.triggerAttackRelease(note, this.length, t)
        }, "+" + time)
    }

}