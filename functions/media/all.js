export async function onRequestGet(ctx) {
  const path = new URL(ctx.request.url).pathname.replace("/media/all/", "");
  //const file = await ctx.env.MEDIA.get(path);
  const file = await ctx.env.MEDIA.get("rgc24/rgc2024/DSC_0001.JPG");
  if (!file) return new Response(null, { status: 404 });
  return new Response(file.body, {
    headers: { "Content-Type": file.httpMetadata.contentType },
  });
}
