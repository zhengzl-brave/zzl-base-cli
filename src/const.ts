import path from "path";
// fs模块的加强 支持更强大的读写
import fs from "fs-extra";
import util from "util";
import download from "download-git-repo";

import { TRepoURL, TRepoURLTag, IRepoURLTag } from "./type";

// 当前根目录
export const ROOT_DIR = path.resolve(__dirname, "../");

const { version } = fs.readJsonSync(path.resolve(ROOT_DIR, "package.json"));
// 当前版本号
export const VERSION = version;

// 由选择的type映射对应git地址
export const getRepoURL = (tag: TRepoURLTag): TRepoURL<TRepoURLTag> => {
  return `https://gitee.com/redstone-1/${tag}.git`;
};

export const downloadGitRepo = util.promisify(download);

// 标签类型
export const repoURLTag: IRepoURLTag = {
  vueTemplate: "vue-template",
  vueTemplateTypescript: "vue-template-typescript",
  reactTemplate: "react-template",
  reactTemplateTypescript: "react-template-typescript",
  uniappVue2: "uniapp-vue2",
  uniappVue2Uview: "uniapp-vue2-uview",
  uniappVue3: "uniapp-vue3",
  uniappVue3Typescript: "uniapp-vue3-typescript",
  koa: "koa",
  nest: "nest",
  library: "library",
  libraryTypescript: "library-typescript",
};

// https://tooltt.com/art-ascii/
export const BRAND_LOGO = `
███████╗███████╗██╗          ██████╗██╗     ██╗
╚══███╔╝╚══███╔╝██║         ██╔════╝██║     ██║
  ███╔╝   ███╔╝ ██║         ██║     ██║     ██║
 ███╔╝   ███╔╝  ██║         ██║     ██║     ██║
███████╗███████╗███████╗    ╚██████╗███████╗██║
╚══════╝╚══════╝╚══════╝     ╚═════╝╚══════╝╚═╝                                              
`;
