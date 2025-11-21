const commonAPI = async (method, url, body = null) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Only attach body for POST, PUT, PATCH
  if (body !== null && ["POST", "PUT", "PATCH"].includes(method)) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`HTTP ${response.status}: ${text}`);
  }

  // Handle empty body (DELETE returns empty)
  const raw = await response.text();
  if (!raw) return {}; // return empty object for DELETE

  try {
    return JSON.parse(raw);
  } catch {
    return raw; // fallback
  }
};

export default commonAPI;
