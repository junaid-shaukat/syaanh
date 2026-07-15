import { useState, useCallback, useMemo, useRef } from "react";
import api from "../api/axios";

export default function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);

  const request = useCallback(
    async ({
      method = "GET",
      url,
      data = null,
      params = {},
      headers = {},
      responseType = "json",
      onUploadProgress,
      onDownloadProgress,
      signal,
    }) => {
      // Cancel any in-flight request for the same method+url
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      abortControllerRef.current = new AbortController();

      setLoading(true);
      setError(null);

      try {
        const response = await api({
          method,
          url,
          data,
          params,
          headers,
          responseType,
          onUploadProgress,
          onDownloadProgress,
          signal: signal || abortControllerRef.current.signal,
        });

        return response.data;
      } catch (err) {
        if (err.name === "CanceledError" || err.code === "ERR_CANCELED") {
          // Silently ignore aborted requests
          return;
        }
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const methods = useMemo(
    () => ({
      /** GET request */
      get: (url, config = {}) =>
        request({ method: "GET", url, ...config }),

      /** POST request */
      post: (url, data, config = {}) =>
        request({ method: "POST", url, data, ...config }),

      /** PUT request */
      put: (url, data, config = {}) =>
        request({ method: "PUT", url, data, ...config }),

      /** PATCH request */
      patch: (url, data, config = {}) =>
        request({ method: "PATCH", url, data, ...config }),

      /** DELETE request */
      delete: (url, config = {}) =>
        request({ method: "DELETE", url, ...config }),

      /** HEAD request */
      head: (url, config = {}) =>
        request({ method: "HEAD", url, ...config }),

      /** OPTIONS request */
      options: (url, config = {}) =>
        request({ method: "OPTIONS", url, ...config }),

      /** QUERY request — a safe, idempotent method that carries a body */
      query: (url, data, config = {}) =>
        request({ method: "QUERY", url, data, ...config }),

      /** Upload files via multipart/form-data POST */
      upload: (url, formData, config = {}) =>
        request({
          method: "POST",
          url,
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            ...(config.headers || {}),
          },
          ...config,
        }),

      /** Download file as blob via GET */
      download: (url, config = {}) =>
        request({
          method: "GET",
          url,
          responseType: "blob",
          ...config,
        }),

      /** POST with multipart/form-data (shorthand for form submissions) */
      postForm: (url, data, config = {}) =>
        request({
          method: "POST",
          url,
          data,
          headers: {
            "Content-Type": "multipart/form-data",
            ...(config.headers || {}),
          },
          ...config,
        }),

      /** PUT with multipart/form-data */
      putForm: (url, data, config = {}) =>
        request({
          method: "PUT",
          url,
          data,
          headers: {
            "Content-Type": "multipart/form-data",
            ...(config.headers || {}),
          },
          ...config,
        }),

      /** PATCH with multipart/form-data */
      patchForm: (url, data, config = {}) =>
        request({
          method: "PATCH",
          url,
          data,
          headers: {
            "Content-Type": "multipart/form-data",
            ...(config.headers || {}),
          },
          ...config,
        }),

      /** Resolve the final URL for a given config without making the request */
      getUri: (config) => api.getUri(config),

      /** Raw request method for full control */
      request,
    }),
    [request]
  );

  return {
    loading,
    error,
    ...methods,
  };
}