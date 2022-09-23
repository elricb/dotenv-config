import findFileUp from "@elricb/find-file-up";
import dotenv from "dotenv";

export default function (directory: string, config: DotEnvConfig = {}): void {
  const defaultConfig: DotEnvConfig = {
    override: true,
    path: findFileUp(directory, ".env")
  };

  if (!defaultConfig.path) {
    delete defaultConfig.path;
  }

  dotenv.config(Object.assign(defaultConfig, config));
}
