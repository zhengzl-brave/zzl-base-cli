import { program } from "commander";
import chalk from "chalk";
import { VERSION, BRAND_LOGO } from "./const";
import { create } from "./commands";

const runner = () => {
  // program.name 定义命令的名称；usage 定义命令的用法；chalk定义颜色样式
  program
    .name(chalk.cyan("zzl"))
    .usage(`${chalk.yellow("<command>")} [options]`);

  // 定义 --version 版本号 调用版本默认将-V -version 添加到命令中
  program.version(
    `\r\n ${chalk.cyan.bold(VERSION)}
        ${chalk.cyan.bold(BRAND_LOGO)}`
  );

  // 新建 commands 目录中存放的各类命令
  create();

  // program.on 监听某个参数的执行 并执行回调
  program.on("--help", () => {
    console.log(
      `\r\n终端执行 ${chalk.cyan.bold(
        "zzl <command> --help"
      )} 获取更多命令详情\r\n`
    );
  });

  // 解析用户在终端输入的命令和参数并执行
  program.parse(process.argv);
};

export default runner;
