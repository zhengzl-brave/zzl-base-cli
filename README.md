# 开发注意事项

chalk 和 ora 这两个库不用用最新版本，会有问题

之所以直接 zzl 便可以执行而不用项目名称是因为我们咋 package.json 中做了 bin 的配置

## 第三方库

- `commander`：解析用户在终端输入的命令及参数，例如 create、--help 等。
- `chalk`： 为终端输出的文字增加各种各样的颜色。
- `inquirer`： 给用户提供各种交互，包括输入、选择等，例如提示用户选择项目的创建类型，其可以提供输入框、radio、checkbox 等强大的交互控件。
- `ora`：增加 loading，例如下载模板时增加 loading。
- `fs-extra`：fs 模块的增强，支持更强大的文件读写操作。
- `download-git-repo`：下载模板。

# 关于使用

## 用前准备

node 版本 14.18+ 或 16+ 或更高

`npm (yarn、pnpm) i (add) zzl-cli -g`

`npx zzl-cli create <project-name>`

## 查看命令详情

`zzl` | `zzl --help` | `zzl -h`

## 查看版本

`zzl --version` | `zzl -V`

## 新建项目

`zzl create <project-name> -f (--force)`

例如：`zzl create vue-template -f`

## 查看命令详情

`zzl <command> --help`

例如：`zzl create --help`
