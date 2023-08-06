import fs from "fs-extra";
import { askOverwrite } from "./askUser";
import downloadRepo from "./downloadRepo";

/**
 * 如果目录存在则调用
 * @param options - 命令参数
 * @param targetDirectory - 目标路径
 */
export default async (
  options: any,
  projectName: string,
  targetDirectory: string
) => {
  // 判断是否使用--force参数
  if (options.force) {
    // 删除重名目录
    await fs.remove(targetDirectory);
    await downloadRepo(projectName, targetDirectory);
  } else {
    const isOverwrite = await askOverwrite();
    // 选择了overwrite
    if (isOverwrite) {
      // 先删除原有重名目录
      await fs.remove(targetDirectory);
      await downloadRepo(projectName, targetDirectory);
    }
  }
};
