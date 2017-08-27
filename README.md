# pipe.js

I always like Ramda.js implementation of function composition via piping with their R.pipe. But exposing myself to Elixir, I found that I should be able to do things like 
```
R.pipe(
  2, 
  addOne, 
  double, 
  square
) 
// 36
```
which would return 36 but would throw error with actual Ramda implementation. In Elixir, you could write 
```
2 
|> addOne 
|> double 
|> square
```
 and have 36
 
A pipeline operator has also been proposed for ES7, see https://github.com/tc39/proposal-pipeline-operator
