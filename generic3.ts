function helloArray<T>(message: T[]):T {
  return message[0];
}

helloArray(['hello','hedsakjf']);
helloArray(['hello',5]);


function helloTuple<T,K>(message:[T,K]):T {
  return message[0];
}

helloTuple(['hello','helltuple']);
helloTuple(['hello',5]);