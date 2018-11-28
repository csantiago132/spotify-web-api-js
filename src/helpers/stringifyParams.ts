export function stringifyParams(params: { [key: string]: any }) {
  return Object.keys(params)
    .map(key => {
      const param = params[key];
      return Array.isArray(param)
        ? `${encodeURIComponent(key)}=${encodeURIComponent(param.join(","))}`
        : `${encodeURIComponent(key)}=${encodeURIComponent(param)}`;
    })
    .join("&");
}
