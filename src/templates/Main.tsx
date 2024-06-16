"use client";

import { usePrefPopulation } from "../hooks/usePrefPopulation";
import CheckField from "../components/CheckField";
import Graph from "../components/Graph";

type Props = { prefectures: { prefCode: number; prefName: string }[] };

export default function Main({ prefectures }: Props) {
  const { populationdata, label, handleClickCheck } = usePrefPopulation();
  console.log(populationdata);

  return (
    <main>
      <section>
        <div className="w-5/6 m-auto mt-8">
          <h2 className="text-2xl font-semibold border-l-4 border-gray-400 px-8 py-2 mb-8">
            都道府県
          </h2>
          <CheckField prefectures={prefectures} onChange={handleClickCheck} />
        </div>
      </section>
      <section>
        <div className="w-5/6 m-auto mt-8">
          <h2 className="text-2xl font-semibold border-l-4 border-gray-400 px-8 py-2 mb-8">
            人口推移グラフ
          </h2>
          <Graph populationdata={populationdata} label={label} />
        </div>
      </section>
    </main>
  );
}
