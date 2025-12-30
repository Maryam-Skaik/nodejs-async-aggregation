/**
 * Safely executes a fetch request
 * Always resolves with a unified structure
 */
export async function safeRequest(url) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();

    return {
      success: true,
      data,
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
