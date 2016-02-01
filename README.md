# Testing 'bluebird' Promises
Chaining loaded Promises in Node.js.

Custom code w/ Promises moved to the separate module and loaded back
for running after the common code. 

### Install

`npm install`

### Start

`npm start`

Should print:

```
1454360415722 common: done
1454360416127 custom, #1: done
1454360416328 custom, #2: done
1454360416428 custom, #3: done
1454360416428 server: done
```
