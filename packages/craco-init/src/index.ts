#!/usr/bin/env node
import path from "path";
import fs from "fs";
import { execSync } from "child_process";

// cp __dirname/tpls/* .
const tpls = path.join(__dirname, "tpls");
const files = ["craco.config.ts", "tsconfig.path.json"];
files.forEach((file) => {
  const from = path.join(tpls, file);
  const to = path.join(process.cwd(), file);
  fs.copyFileSync(from, to);
});

// 更新 start/build/test 三个 scripts
const pkgPath = path.join(process.cwd(), "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
pkg.scripts.start = "craco start";
pkg.scripts.build = "craco build";
pkg.scripts.test = "craco test";
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

// 添加 @craco/craco @craco/types 到 npm 中
execSync("npm i @craco/craco @craco/types", { stdio: "inherit" });

// 添加 "extends": "./tsconfig.path.json" 到 tsconfig.json 上
const tsconfigPath = path.join(process.cwd(), "tsconfig.json");
const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, "utf-8"));
tsconfig.extends = "./tsconfig.path.json";
fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
