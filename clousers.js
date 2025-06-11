import ic from 'node-icecream'

function out() {
  const a = 42
  function inn() {
    console.log(a)
  }
  inn()
}

out()

