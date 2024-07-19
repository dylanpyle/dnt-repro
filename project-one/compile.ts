import { build, emptyDir } from "@deno/dnt";

await emptyDir("./output");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./output",
  shims: {
    deno: true
  },
  package: {
    name: "output"
  },
  importMap: "./deno.json"
});
