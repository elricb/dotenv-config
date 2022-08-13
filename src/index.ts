import findFileUp from "@elricb/find-file-up";
import dotenv from "dotenv";

export default function (directory: string): void {
  dotenv.config({
    override: true,
    debug: false,
    path: findFileUp(directory, ".env") || undefined
  });
}
