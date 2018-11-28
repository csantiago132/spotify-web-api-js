import * as config from "../config";
import { ErrorObject } from "../model";
import { stringifyParams } from "./stringifyParams";

export interface PerformRequestOptions {
  method?: "POST" | "PUT" | "DELETE";
  queryParams?: object;
  bodyParams?: object;
}

export async function performRequest<T>(
  accessToken: string,
  endpoint: string,
  options?: PerformRequestOptions
) {
  const baseUrl = `${config.BASE_URI}${endpoint}`;
  const baseHeaders = { Authorization: `Bearer ${accessToken}` };

  if (options) {
    const url = options.queryParams
      ? `${baseUrl}/?${stringifyParams(options.queryParams)}`
      : baseUrl;
    const response = await fetch(url, {
      headers: {
        ...baseHeaders,
        ...(options.method && { "Content-Type": "application/json" })
      },
      ...(options.method && { method: options.method }),
      ...(options.bodyParams && { body: JSON.stringify(options.bodyParams) })
    });

    if (!response.ok) {
      const err = (await response.json()) as ErrorObject;
      throw new Error(`${err.status}: ${err.message}`);
    }

    return (await response.json()) as T;
  } else {
    const response = await fetch(baseUrl, { headers: baseHeaders });

    if (!response.ok) {
      const err = (await response.json()) as ErrorObject;
      throw new Error(`${err.status}: ${err.message}`);
    }

    return (await response.json()) as T;
  }
}
