import chalk from "chalk"

export const getMethodColor = (method: string) => {
    switch (method) {
        case "GET": return chalk.green(method); break;
        case "POST": return chalk.blue(method); break;
        case "DELETE": return chalk.red(method); break;
        case "PATCH": return chalk.grey(method); break;
        default:
            return chalk.yellow(method); break;
    }
}

export const getHostColor = (host: string) => {
    return chalk.blueBright(host);
}

export const getUlrColor = (url: string) => {
    return chalk.yellowBright(url);
}

export const getOrigUrlColor = (org: string) => {
    return chalk.cyanBright(org);
}

export const getMsColor = (ms: number) => {
    if (ms >= 0 && ms <= 60) return chalk.greenBright(ms.toString() + ' ms');
    else if (ms > 60 && ms < 100) return chalk.yellow(ms.toString() + ' ms');
    else return chalk.redBright(ms.toString() + ' ms');
}

export const statusColor = (status: number) => {
    switch (status) {
        case 200: return chalk.green(status); break;
        case 201: return chalk.grey(status); break;
        case 404: return chalk.red(status); break;
        case 500: return chalk.redBright(status); break;
        case 403: return chalk.yellow(status); break;
        default: return chalk.red(status); break;
    }
}