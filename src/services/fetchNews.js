import { SERVER } from "./serverConst";

export default async function fetchNews() {
  const res = await fetch(`${SERVER}/api/news`);
  const data = await res.json();
  return data.err ? ["something went wrong"] : data.foundNews;
}
