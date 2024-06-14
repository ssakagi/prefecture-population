import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  const prefCode = req.nextUrl.searchParams.get("prefCode");
  const res = await axios.get(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
    {
      headers: { "X-API-KEY": process.env.API_KEY },
    }
  );
  const data = res.data;
  return NextResponse.json(data);
}
