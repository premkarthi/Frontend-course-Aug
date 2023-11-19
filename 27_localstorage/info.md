Local storage & 
    Web storage objects localStorage  allow to store key/value pairs in the browser.

Both key and value must be strings.
The limit is 5mb+ depends on the browser.
They do not expire.
The data is bound to the origin (domain/port/protocol).
Shared between all tabs and windows with the same origin
survives browser restart



setItem(key, value) – store key/value pair.
getItem(key) – get the value by key.
removeItem(key) – remove the key with its value.
clear() – delete everything.
key(index) – get the key number index.
length – the number of stored items.
Use Object.keys to get all keys.



Session stroge

Both key and value must be strings.
The limit is 5mb+ depends on the browser.
They do expire when user close the browser

Cookies 
4kb