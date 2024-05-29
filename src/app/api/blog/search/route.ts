import { HOST } from "@/config/app.config";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const response = await fetch(HOST + `/api/blog/search?title=${title}`);
  if (response.ok) {
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } else {
    // Handle the error
    return new Response("Error: " + response.statusText, {
      status: response.status,
    });
  }
}
