let row = [1];

for (let i = 1; i <= rowIndex; i++) {
  let prev = 1;

  for (let j = 1; j < i; j++) {
    let curr = row[j];
    row[j] = prev + curr;
    prev = curr;
  }

  row.push(1);
}

return row;
