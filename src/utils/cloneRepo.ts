import { downloadGitRepo } from "../const";
import { TDownloadRepoParams } from "../type";
import { loading } from "./loading";

/**
 * 下载仓库
 * @param repoURL - 仓库地址
 * @param targetDirectory - 目标存储路径
 * @param projectName - 项目名称
 */
export const cloneRepo = async ({
  repoURL,
  projectName,
  targetDirectory,
}: TDownloadRepoParams) => {
  await loading(
    "正在下载模板，请稍后...",
    () =>
      downloadGitRepo(`direct:${repoURL}`, targetDirectory, { clone: true }),
    { projectName }
  );
};
