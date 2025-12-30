/**
 * Wraps a promise with a timeout
 * Rejects if the promise does not resolve within `ms`
 */
export function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout")), ms)
  );

  return Promise.race([promise, timeout]);
}
