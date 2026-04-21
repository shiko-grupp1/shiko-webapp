export const getData = async <T>(url: string, headers?: HeadersInit, cacheTime: number = 300) => {
  const combinedHeaders = new Headers(headers);

  if (!combinedHeaders.has("Content-Type")) combinedHeaders.set("Content-Type", "application/json");

  const response = await fetch(url, {
    method: "GET",
    headers: combinedHeaders,
    next: { revalidate: cacheTime },
  });

  if (!response.ok) return `Fetch failed: ${response.status}`;

  const data: T = await response.json();

  return data;
};
