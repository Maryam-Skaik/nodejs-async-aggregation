import { withTimeout } from "./wrappers/timeoutWrapper.js";
import { safeRequest } from "./wrappers/safeRequest.js";

/**
 * URLs to aggregate
 */
const endpoints = {
  users: "https://jsonplaceholder.typicode.com/users",
  posts: "https://jsonplaceholder.typicode.com/posts",
  countries: "https://restcountries.com/v3.1/all"
};

/**
 * Final aggregation function
 */
async function aggregateAPIs() {
  const entries = Object.entries(endpoints);

  const results = await Promise.allSettled(
    entries.map(([_, url]) =>
      withTimeout(safeRequest(url), 3000)
    )
  );

  return entries.reduce((acc, [key], index) => {
    const result = results[index];

    acc[key] =
      result.status === "fulfilled"
        ? result.value
        : {
            success: false,
            data: null,
            error: result.reason.message
          };

    return acc;
  }, {});
}

/**
 * Run demo
 */
aggregateAPIs().then(console.log);
