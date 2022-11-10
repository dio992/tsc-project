function helloBasic<T,U>(message:T, commont:U): T {
  return message;
}

helloBasic<string,number>("mark",42);
helloBasic(22,36);
