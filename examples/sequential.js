/**
 * Sequential requests example
 * ❌ Slow because each request waits for the previous one
 */

async function sequentialRequests() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json());

  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json());

  const todos = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json());

  return { users, posts, todos };
}

sequentialRequests().then(console.log);
