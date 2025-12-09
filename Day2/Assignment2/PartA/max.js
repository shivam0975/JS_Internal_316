// Max among 3 numbers

const first = 35;
const second = 78;
const third = 4;


//Using Math.max function
console.log(Math.max(first , second , third) + " is largest.");


// Using if...else
if (first >= second && first >= third) {
    console.log(first + " is largest.");
  } else if (second >= first && second >= third) {
    console.log(second + " is largest.");
  } else {
    console.log(third + " is largest");
  }

//Using Ternary Operator
first>second ? 
    (first>third ? console.log(first + " is largest.") : console.log(third + " is largest") ) :
        (second>third ? console.log(second + " is largest.") : console.log(third + " is largest"));


