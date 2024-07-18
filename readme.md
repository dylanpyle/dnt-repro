# dnt-repro

Reproduction steps:
- `cd project-one`
- `deno run -A compile.ts`

Expected output:
- It works

Actual output:

```
$ deno run -A compile.ts
[dnt] Transforming...
error: Uncaught (in promise) "Error stripping prefix of /Users/dylan/dev/scratchpad/dnt-repro/project-two/deeper/mod.ts with base /Users/dylan/dev/scratchpad/dnt-repro/project-one"
```
