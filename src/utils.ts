import fs from 'fs-extra';
import https from "https";
import path from "path";
import os from "os";

export function download(url, pathToFile) {
    return new Promise((resolve, reject) => {
        const fileStream = fs.createWriteStream(pathToFile);
        https.get(url, (res) => {
            res.pipe(fileStream);
            fileStream.on('close', () => resolve(fileStream));
            res.on('error', (error) => reject(error));
        })
            .on('error', (error) => reject(error));
    });
}

export function createFolder(folderName): string {
    const folder = path.join("./", folderName);
    fs.ensureDirSync(folder);
    return folder;
}

export function getRootPath(): string {
    const isLinux = os.platform() === "linux"
    const pathToDirectory = import.meta.url.split(isLinux ? "file://" : "file:///")[1];
    return path.join(pathToDirectory, "../..");
}

export function readFileFromRoot(filePath: string) {
    return fs.readFileSync(path.join(getRootPath(), filePath), "utf8")
}

export function readJsonFromRoot(filePath: string) {
    return JSON.parse(readFileFromRoot(filePath));
}

export function readJsonFromVisual(filePath: string, visualPath?: string) {
    return JSON.parse(fs.readFileSync(path.join(visualPath ?? process.cwd(), filePath), "utf8"));
}

