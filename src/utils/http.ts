export const GET = <T = any>(url: string): Promise<T> =>
  fetch(url).then(r => r.json());
