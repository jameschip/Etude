# Etude

A small tool for writing music in lisp.

Example to play a random note in a loop forever
```
(def s1 (synth "triangle"))

(defn loop () (
  (debug "here")
  (note s1 (rnote))
))

(repeat loop "8n")
(play)
```

