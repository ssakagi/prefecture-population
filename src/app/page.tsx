import Main from "../templates/Main";
import axios from "axios";

export default async function Home() {
  const res = await axios.get("http://127.0.0.1:3000/api/resas/prefectures");
  const data = await res.data;
  const prefectures = await data.result;
  return <Main prefectures={prefectures} />;
}
