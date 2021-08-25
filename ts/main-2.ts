function add(x: number, y: number) {
  console.log(x + y);
  return x + y;
}

const x:string = '10';
const y: number = 15;

function parseInt(str: string) {
  return Number.parseInt(str);
}

// Number.parseInt('StringNumber') 13
// Number.parseFloat('StringNumber') 13.0 || 13.5
// +x => +'15' => 15;

add(+x, y);


// Number
// String
// Boolean
// Object {}
// Array []
// NaN

const user = {
  name: 'ahmed',
  age: 18
};


const keys = Object.keys(user); // ['name', 'age']
const values = Object.values(user) // ['ahmed', 18]


// combined types

// plain : string || number
// affix: string || number
function concat(plain: string | number, affix: string | number): string | number {
  if (typeof plain != typeof affix) return '';

  // 'number' | 'string' | ..etc
  if (typeof plain == 'string') {
    return plain += (affix as string)
  } else {
    return plain * (affix as number)
  }
}

concat('ahmed ', 'hi') // ahmed hi
concat(10, 2) // 20
// concat('true', false) Error

// type
// interface user {
//   name: string;
//   age: number;
// }

// interface CustomUser extends user {
//   address: string;
// }

// type USER = {
//   name: string;
//   age: number;
// }


// type CUSTOM_USER extends USER // Error

// const userData: CustomUser = {
//   address: "",
//   name: "",
//   age: 0
// };


// class User implements user {
//   name: string;
//   age: number;

// }


interface ADDRESS {
  country: string;
  gov: string;
  city: string;
  ngh: string;
  details: string;
}



interface USER extends ADDRESS {
  name: string;
  email: string;
  password: string;
}

class User implements USER {
  name: string;
  email: string;
  password: string;
  country: string;
  gov: string;
  city: string;
  ngh: string;
  details: string;
}


// generics



