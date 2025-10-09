export async function fetchJson<T = unknown>(input: RequestInfo | URL, init?: RequestInit): Promise<T> {
  const response = await fetch(input, init);
  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new Error(`Request failed: ${response.status} ${response.statusText} ${text}`.trim());
  }
  return (await response.json()) as T;
}
