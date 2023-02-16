import findFileUp from "@elricb/find-file-up";
import {config} from "dotenv";
import type {DotenvConfigOptions} from "dotenv";

export default function (
  directory: string,
  userConfig: DotenvConfigOptions = {}
): void {
  const defaultConfig: DotenvConfigOptions = {
    override: true,
    path: findFileUp(directory, ".env")
  };

  if (!defaultConfig.path) {
    delete defaultConfig.path;
  }

  config(Object.assign(defaultConfig, userConfig));
}
