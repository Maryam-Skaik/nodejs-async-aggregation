/**
 * Parallel requests using Promise.all
 * ✅ Fast
 * ❌ Fails completely if one request rejects
 */

async function parallelRequests() {
  const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/todos"
  ];

  const responses = await Promise.all(
    urls.map(url => fetch(url).then(res => res.json()))
  );

  return {
    users: responses[0],
    posts: responses[1],
    todos: responses[2]
  };
}

parallelRequests().then(console.log);
