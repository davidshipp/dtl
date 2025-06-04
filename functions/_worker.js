export default {
  async fetch(request, env, ctx) {
    const response = await env.ASSETS.fetch(request);
    const newHeaders = new Headers(response.headers);
    newHeaders.set("Access-Control-Allow-Origin", "*");
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  },
};
