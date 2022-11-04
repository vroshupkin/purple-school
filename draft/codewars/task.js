function calcSum_j(a){
  let res = (a * a * a) - 3n * (a * a) + 2n * a
  return res
}

function getSum(n) {
    const sum_1 = n * (n + 1n)
    let sum_i = 3n * sum_1 + (n * (n + 1n) * (2n*n + 1n))
    // sum_i /= 6n
    
    n += 1n
    let sum_j = calcSum_j(n + 1n)
    // sum_j /= 6n
    let sum_2 = 3n * n * (n + 1n)
    // sum_2 /= 6n

    return (sum_2 + sum_i + 2n * sum_j) / 6n

}

console.log(getSum(823944n) - 372909806400966605n)


function sumSeries(a, b){
  const sum_2 = b * (b + 1n) / 2n
  const sum_1 = a * (a + 1n) / 2n
  return sum_2 - sum_1
}

function sum(a){
  return a * (a + 1) / 2
}

function out(a){
  let b = 0
  for (let i = 0; i < a; i++) {
    b += sum(i)
  }
  return b
}
