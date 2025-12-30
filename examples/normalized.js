/**
 * Normalized response structure
 * Always returns { success, data, error }
 */

async function normalizedRequest(url) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    return {
      success: true,
      data: await res.json(),
      error: null
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      error: err.message
    };
  }
}

async function run() {
  const results = await Promise.all([
    normalizedRequest("https://jsonplaceholder.typicode.com/users"),
    normalizedRequest("https://invalid-api.com")
  ]);

  console.log(results);
}

run();
