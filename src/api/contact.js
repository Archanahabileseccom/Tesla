const configuredApiOrigin = import.meta.env.VITE_API_BASE_URL?.trim();

export function getContactApiUrl() {
  if (!configuredApiOrigin) {
    if (import.meta.env.DEV) {
      return "/api/contact/";
    }

    console.error(
      "Contact API configuration is missing. Set VITE_API_BASE_URL to the deployed Django backend origin and rebuild the frontend.",
    );
    return null;
  }

  let apiOrigin;
  try {
    apiOrigin = new URL(configuredApiOrigin);
  } catch {
    console.error("VITE_API_BASE_URL must be an absolute backend origin.");
    return null;
  }

  if (
    !["http:", "https:"].includes(apiOrigin.protocol) ||
    apiOrigin.pathname !== "/" ||
    apiOrigin.search ||
    apiOrigin.hash ||
    apiOrigin.username ||
    apiOrigin.password
  ) {
    console.error(
      "VITE_API_BASE_URL must be an HTTP(S) backend origin without a path, query, or fragment.",
    );
    return null;
  }

  if (
    !import.meta.env.DEV &&
    (apiOrigin.protocol !== "https:" ||
      ["localhost", "127.0.0.1", "::1", "[::1]"].includes(apiOrigin.hostname))
  ) {
    console.error(
      "Production VITE_API_BASE_URL must use HTTPS and cannot point to localhost.",
    );
    return null;
  }

  return `${apiOrigin.origin}/api/contact/`;
}
