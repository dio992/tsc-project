function helloGeneric<T>(message:T):T {
  return message;  
}

console.log(helloGeneric("mark").length);
console.log(helloGeneric(39));
console.log(helloGeneric(true));