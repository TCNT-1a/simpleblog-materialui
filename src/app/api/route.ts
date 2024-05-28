export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  // const id = searchParams.get("id");
  // const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
  //   headers: {
  //     "Content-Type": "application/json",
  //     "API-Key": process.env.DATA_API_KEY!,
  //   },
  // });
  // const product = await res.json();
  // Tại đây call api tìm kiếm post qua BE
  const product = { hello: "world" };
  return Response.json({ product });
}
