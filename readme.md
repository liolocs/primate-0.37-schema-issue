# Issue:

When importing a store in a script and searching with the `with` option, we get the following error:

```ts
2 | export default function coded(fns) {
3 |     return Object.fromEntries(Object.entries(fns).map(([key, fn]) => [
4 |         key,
5 |         (...args) => {
6 |             const err = fn(...args);
7 |             return new CodeError(key, err.strings, ...err.params);
                       ^
error: no store registered for schema
    strings: [ "no store registered for schema", raw: [ "no store registered for schema" ] ],
     params: [],
 std:error/template/v0: true,
 std:error/code/v0: true,
       code: "unregistered_schema"
```

## Steps to reproduce:

1. Uncomment lines 4 to 8 in `scripts/test.ts` and comment out line 10
2. `bun install && bun run scripts/test.ts` 
3. Comment out lines 4 to 8 in `scripts/test.ts` and uncomment line 10
  
You should see the error
