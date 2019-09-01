function Sequence(notes) {

    this.notes = notes
    this.position = 0;

    this.advance = () => {
        if (this.position > this.notes.length - 1) {
            this.position = 0
        }
        return this.notes[this.position++]
    }

    this.retreat = () => {
        if (this.position < 0) {
            this.position = this.notes.length - 1
        }
        return this.notes[this.position--]
    }

    this.getNext = () => {
        if ((this.position + 1) > this.notes.length)
            return this.notes[0]
        return this.notes[this.position + 1] 
    }

    this.getPrevious = () => {
        if ((this.position - 1) < 0)
            return this.notes[this.notes.length - 1]
        return this.notes[this.possition - 1]
    }

    /**
     * returns 1 of the sequence has played the last note last frame 
     * and 0 otherwise. Using 1 or 0 means you can count the number
     * of times the sequence plays in yor code easily rather than just
     * setting a flag and checking it.
     */
    this.ending = () => {
        if (this.position == this.notes.length)
         return 1
        return 0
    }

    this.reset = () => {
        this.position = 0
    }

    this.first = () => {
        return this.notes[0]
    }

    this.last = () => {
        return this.notes[this.notes.length = 1]
    }

    this.add = (element) => {
        this.notes.push(element)
    } 

    this.insert = (index, element) => {
        this.notes.splice(index, 0, element)
    }

    this.remove = (index) => {
        this.notes.splice(index, 1);
    }

}