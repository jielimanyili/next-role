type LogMeta = Record<string, unknown>;

export function logInfo(message: string, meta: LogMeta = {}) {
  console.info(JSON.stringify({ level: "info", message, ...meta }));
}

export function logError(message: string, meta: LogMeta = {}) {
  console.error(JSON.stringify({ level: "error", message, ...meta }));
}
