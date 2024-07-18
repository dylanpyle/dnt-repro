import { build, emptyDir } from "@deno/dnt";

await emptyDir("./output");

await build({
  entryPoints: ["../project-one/mod.ts"],
  outDir: "./output",
  shims: {
    deno: true
  },
  package: {
    name: "output"
  },
  importMap: "../project-one/deno.json"
});
