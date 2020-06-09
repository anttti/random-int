# random-int

[![CI](https://github.com/yg/random-int/workflows/CI/badge.svg)](https://github.com/yg/random-int/actions)
[![GitHub tag](https://img.shields.io/github/v/tag/yg/random-int)](https://github.com/yg/random-int/releases)

> Generate a random integer in deno

## Usage

```ts
import { randomInt } from "https://raw.githubusercontent.com/yg/random-int/master/mod.ts";

const result = randomInt(10, 1000);
//=> 58
```

## API

### randomInt([maximum])

Returns an integer from `0` to `maximum`.

### randomInt(minimum, maximum)

Returns an integer from `minimum` to `maximum`.

#### minimum

Type: `number` 
Default: `0`

Minimum integer to return.

#### maximum

Type: `number` 
Default: `1`

Maximum integer to return.

## Related Work

- [sindresorhus/random-int](https://github.com/sindresorhus/random-int) - Generate a random integer

## License

MIT © [Yogi](LICENSE)
