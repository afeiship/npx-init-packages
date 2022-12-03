// 1. 添加 craco.config.ts 文件, cp __dirname/tpls/* .
// 2. 更新 start/build/test 三个 scripts
// 3. 添加 "extends": "./tsconfig.path.json" 到 tsconfig.json 上
// 4. 添加 @craco/craco @craco/types 到 npm 中

import path from "path";
import fs from "fs";

export default () => {
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

  // 添加 "extends": "./tsconfig.path.json" 到 tsconfig.json 上
  const tsconfigPath = path.join(process.cwd(), "tsconfig.json");
  const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, "utf-8"));
  tsconfig.extends = "./tsconfig.path.json";
  fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));

  // 添加 @craco/craco @craco/types 到 npm 中
  const npm = require("npm");
  npm.load(() => {
    npm.commands.install(["@craco/craco", "@craco/types"], () => {
      console.log("craco 初始化完成");
    });
  });
}
