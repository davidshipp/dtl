export default {
  async fetch(request, env, ctx) {
    // Example response
    const body = "Hello from Cloudflare Worker with CORS headers!";
    
    // Set headers
    const headers = new Headers();
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type");

    // Handle OPTIONS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers,
      });
    }

    // Normal response
    return new Response(body, {
      status: 200,
      headers,
    });
  },
};
