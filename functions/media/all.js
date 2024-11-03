export async function onRequestGet(ctx) {
  const path = new URL(ctx.request.url).pathname.replace("/media/rgc24", "rgc2024");
  const file = await ctx.env.MEDIA.get("DSC_0001.JPG");
  if (!file) return new Response(null, { status: 404 });
  return new Response(file.body, {
    headers: { "Content-Type": file.httpMetadata.contentType },
  });
}
