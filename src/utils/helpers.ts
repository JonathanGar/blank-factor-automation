export function log(message: string): void {
    console.log(`[LOG] ${message}`);
}

export function urlToRegex(url: string): RegExp {
    return new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$');
}
