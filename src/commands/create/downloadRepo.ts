import chalk from "chalk";
import {
  askCreateType,
  askIsAgreeCli,
  askNeedTypeScript,
  askNeedUviewUI,
  askVueVersion,
} from "./askUser";
import { TProjectType, TRepoURL, TRepoURLTag } from "../../type";
import { getRepoURL, repoURLTag } from "../../const";
import { cloneRepo } from "../../utils/cloneRepo";

/**
 * 下载vue模板
 * @param projectName 项目名称
 * @param targetDirectory 目标存储路径
 */
const downloadVueTmplate = async (
  projectName: string,
  targetDirectory: string
) => {
  let repoURL = "";
  const needTypeScript = await askNeedTypeScript();
  if (needTypeScript) {
    repoURL = getRepoURL(repoURLTag.vueTemplateTypescript);
  } else {
    repoURL = getRepoURL(repoURLTag.vueTemplate);
  }
  await cloneRepo({
    repoURL: repoURL as TRepoURL<TRepoURLTag>,
    projectName,
    targetDirectory,
  });
};

// 下载react模板
const downloadReactTemplate = async (
  projectName: string,
  targetDirectory: string
) => {
  let repoURL = "";
  const needTypeScript = await askNeedTypeScript();
  if (needTypeScript) {
    repoURL = getRepoURL(repoURLTag.reactTemplateTypescript);
  }
  if (!needTypeScript) {
    repoURL = getRepoURL(repoURLTag.reactTemplate);
  }
  await cloneRepo({
    repoURL: repoURL as TRepoURL<TRepoURLTag>,
    projectName,
    targetDirectory,
  });
};

// 下载库模板
const downloadLibraryTemplate = async (
  projectName: string,
  targetDirectory: string
) => {
  let repoURL = "";
  const needTypeScript = await askNeedTypeScript();
  if (needTypeScript) {
    repoURL = getRepoURL(repoURLTag.libraryTypescript);
  }
  if (!needTypeScript) {
    repoURL = getRepoURL(repoURLTag.library);
  }
  await cloneRepo({
    repoURL: repoURL as TRepoURL<TRepoURLTag>,
    projectName,
    targetDirectory,
  });
};

// 下载uniapp模板
const downloadUniappTemplate = async (
  projectName: string,
  targetDirectory: string
) => {
  const isAgreeCli = await askIsAgreeCli();
  if (!isAgreeCli) return;

  let repoURL = "";
  const version = await askVueVersion();
  if (version === 2) {
    const needUviewUI = await askNeedUviewUI();
    repoURL = needUviewUI
      ? getRepoURL(repoURLTag.uniappVue2Uview)
      : getRepoURL(repoURLTag.uniappVue2);
  } else if (version === 3) {
    const needTypeScript = await askNeedTypeScript();
    repoURL = needTypeScript
      ? getRepoURL(repoURLTag.uniappVue3Typescript)
      : getRepoURL(repoURLTag.uniappVue3);
  }
  await cloneRepo({
    repoURL: repoURL as TRepoURL<TRepoURLTag>,
    projectName,
    targetDirectory,
  });
};

// 下载koa模板
const downloadKoaTemplate = async (
  projectName: string,
  targetDirectory: string
) => {
  const repoURL = getRepoURL(repoURLTag.koa);
  await cloneRepo({
    repoURL: repoURL as TRepoURL<TRepoURLTag>,
    projectName,
    targetDirectory,
  });
};

// 根据projectType 执行相应模板创建
const execCreate = async (
  projectType: TProjectType,
  projectName: string,
  targetDirectory: string
) => {
  switch (projectType) {
    case "library":
      await downloadLibraryTemplate(projectName, targetDirectory);
      break;
    case "vue":
      await downloadVueTmplate(projectName, targetDirectory);
      break;
    case "react":
      await downloadReactTemplate(projectName, targetDirectory);
      break;
    case "uniapp":
      await downloadUniappTemplate(projectName, targetDirectory);
      break;
    case "koa":
      await downloadKoaTemplate(projectName, targetDirectory);
      break;
    case "nest":
      console.log(chalk.gray.bold("\r\n  开发中，敬请期待...\r\n"));
      break;
    default:
      return;
  }
};

/**
 * 创建项目
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
export default async (projectName: string, targetDirectory: string) => {
  console.log(
    chalk.red.bold(
      `\r\n  请注意：本 cli 下大部分模板采用 vite 构建，node 版本需要 14.18+ 或 16+ 或更高\r\n`
    )
  );

  // 创建项目的类型
  const projectType = await askCreateType();
  await execCreate(projectType, projectName, targetDirectory);
};
