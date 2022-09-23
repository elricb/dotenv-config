import findFileUp from "@elricb/find-file-up";
import dotenv from "dotenv";

type DotEnvConfig = {
  override?: boolean;
  debug?: boolean;
  path?: string;
  encoding?: string;
};

export default function (directory: string, config: DotEnvConfig = {}): void {
  const defaultConfig: DotEnvConfig = {
    override: true,
    debug: false
  };

  const dirFind = String(findFileUp(directory, ".env"));

  if (dirFind) {
    defaultConfig.path = dirFind;
  }

  dotenv.config(Object.assign(defaultConfig, config));
}
