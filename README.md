# Node.js Async Aggregation Demo 🚀

![Course](https://img.shields.io/badge/Course-Node.js%20Advanced-%23ff6f61)
![Language](https://img.shields.io/badge/Language-JavaScript-%23e57373)
![Category](https://img.shields.io/badge/Category-Monorepo%20%26%20Packages-%23ba68c8)
![Level](https://img.shields.io/badge/Level-Intermediate%20%2F%20Advanced-%2381c784)
![Purpose](https://img.shields.io/badge/Purpose-Teaching-%234fc3f7)

This repository demonstrates how to fetch and aggregate data from multiple APIs in Node.js using **Promises** and **advanced async patterns**. It shows the evolution from a naive sequential approach to a production-ready backend solution with **error handling, normalization, and reusable wrappers**.

---

## Table of Contents 📚

- [Introduction](#introduction-📖)
- [Features](#features-✨)
- [Learning Steps](#learning-steps-🧠)
- [Final Demo](#final-demo-🎬)
- [Project Structure](#project-structure-📂)
- [Running the Code](#running-the-code-💻)
- [Real-World Relevance](#real-world-relevance-🌐)
- [Contributing](#contributing-🤝)

---

## Introduction 📖

The task demonstrates:

- Sending multiple HTTP requests to public APIs 🌐  
- Executing requests in **parallel** without blocking ⏱️  
- Handling **partial failures** safely ⚠️  
- Returning a **unified JSON response** 🗄️  
- Using **Promises, async/await, and custom wrappers** 🔧  

APIs used are publicly available: [Free APIs](https://free-apis.github.io/#/).

---

## Features ✨

- **Sequential requests** – first naive approach 🐢  
- **Parallel execution** – faster, non-blocking 🚀  
- **Failure handling** – using `Promise.allSettled` ⚠️  
- **Normalization** – unified JSON structure:  

```json
{
  "apiName": {
    "success": true,
    "data": {...},
    "error": null
  }
}
```

- **Wrappers** – timeout and safe request wrapper for production scenarios ⏱️
- Fully runnable **Node.js >= 18** 💻

---

## Learning Steps 🧠

1. **Sequential Requests** – slow, blocks on each request 🐢 
2. **Parallel Requests** – faster, but fails on first rejection 🚀
3. **allSettled** – handles partial failures ⚠️
4. **Normalization** – clean structure for frontend/backend 🧹
5. **Production Wrappers** – timeout and safe requests 🔧

---

## Final Demo 🎬

Run the main demo:

```bash
node index.js
```

Output example:

```json
{
  "users": { "success": true, "data": [...], "error": null },
  "posts": { "success": true, "data": [...], "error": null },
  "countries": { "success": false, "data": null, "error": "Timeout" }
}
```

---

## Project Structure 📂

```pgsql
nodejs-async-aggregation/
├── index.js                 # Final production-ready aggregation demo
├── examples/                # Step-by-step learning examples
│   ├── sequential.js        # Sequential requests example
│   ├── parallel.js          # Parallel requests example
│   ├── allSettled.js        # Handling failures example
│   └── normalized.js        # Normalization example
├── wrappers/                # Reusable helpers
│   ├── timeoutWrapper.js
│   └── safeRequest.js
├── README.md                # Professional README
├── package.json             # Node.js project metadata
└── .gitignore               # Ignore node_modules
```

---

## Running the Code 💻

1. Clone the repo:

```bash
git clone https://github.com/Maryam-Skaik/nodejs-async-aggregation.git
cd nodejs-async-aggregation
```

2. Install dependencies (if using `axios`, otherwise native fetch works):

```bash
npm install
```

3. Run the demo:

```bash
node index.js
```

---

## Real-World Relevance 🌐

This pattern is commonly used in:

- **API Gateways** – aggregate multiple backend services 🛠️
- **Microservices** – fetch from multiple services safely ⚡
- **Backend-for-Frontend (BFF)** – prepare unified responses for frontend apps 🖥️
- **Analytics / Reporting** – combine data from multiple APIs 📊

---

## Contributing 🤝

Feel free to:

- Add more learning examples
- Add retry logic, logging, or metrics
- Improve README or code documentation
- Share this repository on LinkedIn as an **educational example** 📚
