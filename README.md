# greedy-split

splits string with limit the right way.

install:

```sh
$ npm install --save greedy-split
```

use:

```js
const greedySplit = require('greedy-split');

cosnole.log('1|2|3|4'.split('|', 3)); //logs ['1', '2', '3']
cosnole.log(greedySplit('1|2|3|4', '|', 3)); //logs ['1', '2', '3|4']
```

that is all.
