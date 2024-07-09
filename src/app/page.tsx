import Main from "../templates/Main";
import axios from "axios";

export default async function Home() {
  const res = await axios.get(
    "https://opendata.resas-portal.go.jp/api/v1/prefectures",
    {
      headers: { "X-API-KEY": process.env.API_KEY },
    }
  );
  const data = res.data;
  const prefectures = data.result;
  return <Main prefectures={prefectures} />;
}
