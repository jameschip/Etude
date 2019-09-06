# Etude

A small tool for writing music in lisp.

### Example to play a random note in a loop forever
```
(def s1 (synth "triangle"))

(defn loop () (
  (debug "here")
  (note s1 (rnote))
))

(repeat loop "8n")
(play)
```
### Example t play a sequence
```
(def s1 (synth "triangle"))
(setl s1 "16n")

(def seq (sequence "c4" "d4" "e4"))

(defn loop () (
  (note s1 (advance seq))
))

(repeat loop "16n")

(play)
```
