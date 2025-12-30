/**
 * Parallel requests with Promise.allSettled
 * ✅ Handles partial failures
 */

async function allSettledRequests() {
  const urls = {
    users: "https://jsonplaceholder.typicode.com/users",
    posts: "https://jsonplaceholder.typicode.com/posts",
    invalid: "https://invalid-api-example.com"
  };

  const results = await Promise.allSettled(
    Object.values(urls).map(url =>
      fetch(url).then(res => res.json())
    )
  );

  const keys = Object.keys(urls);

  return results.reduce((acc, result, index) => {
    acc[keys[index]] =
      result.status === "fulfilled"
        ? result.value
        : "FAILED";
    return acc;
  }, {});
}

allSettledRequests().then(console.log);
