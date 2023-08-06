import Inquirer from "inquirer";
import { TPromptListItem } from "../type";

export default async (prompts: TPromptListItem[]) => {
  return await new Inquirer.prompt(prompts);
};
