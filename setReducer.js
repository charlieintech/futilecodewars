function setReducer(input) {
    if (input.length === 1) return input[0];
    
    const result = [];
    let current;
    for (let i = 0; i < input.length; i++) {
      if (current === input[i]) {
        result[result.length - 1] += 1;
        continue;
      }
      current = input[i];
      result.push(1);
      
    }
    return setReducer(result);
  }

