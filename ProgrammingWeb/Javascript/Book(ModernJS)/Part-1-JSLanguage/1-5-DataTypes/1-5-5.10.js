// 1-5-5.10__1

/*
let {name, years: age} = user;
*/

// 1-5-5.10__2

/*
function topSalary(salaries) {

    let max = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }
*/