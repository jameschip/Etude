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