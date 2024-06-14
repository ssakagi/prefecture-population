import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  const res = await axios.get(
    "https://opendata.resas-portal.go.jp/api/v1/prefectures",
    {
      headers: { "X-API-KEY": process.env.API_KEY },
    }
  );
  const data = res.data;
  return NextResponse.json(data);
}
