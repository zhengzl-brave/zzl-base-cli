import { program } from "commander";
import chalk from "chalk";
import create from "./create";

export default () => {
  /**
   * command 监听命令 description 描述命令 option 设置命令可选项 --force 表示是否强制覆盖目录，可选
   * action 是命令执行的真正方法，该方法左后执行定义的create函数
   */
  program
    .command("create <project-name>")
    .description(chalk.cyan("创建新项目"))
    .option(
      "-f, --force",
      chalk.red(
        "如果目录已存在将覆盖原目录，请谨慎使用，这会先删除你已存在的项目再进行创建，可能会存在意外情况"
      )
    )
    .action(create);
};
