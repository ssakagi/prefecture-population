"use client";

import { usePrefPopulation } from "../hooks/usePrefPopulation";
import CheckField from "../components/CheckField";
import Graph from "../components/Graph";

type Props = { prefectures: { prefCode: number; prefName: string }[] };

export default function Main({ prefectures }: Props) {
  const { populationdata, label, handleClickCheck, handleChangeSelect } =
    usePrefPopulation();
  console.log(populationdata);

  return (
    <main>
      <section>
        <div className="w-5/6 m-auto mt-8">
          <h2 className="text-2xl font-semibold border-l-4 border-gray-400 px-8 py-2 mb-8 max-md:text-xl max-md:px-4">
            都道府県
          </h2>
          <CheckField prefectures={prefectures} onChange={handleClickCheck} />
        </div>
      </section>
      <section>
        <div className="w-5/6 m-auto mt-8 mb-6">
          <div
            className="
            relative
            after:content-['']
            after:size-2
            after:absolute
            after:z-20
            after:top-6
            after:right-3
            after:rotate-45
            after:border-b-2
            after:border-r-2
            after:pointer-events-none
            after:max-md:top-4
            "
          >
            <select
              className="
              absolute
              top-2
              right-0
              z-10
              appearance-none
              text-lg
              font-semibold
              text-white
              bg-[rgb(8,126,164)]
              border-2
              rounded-md
              py-1
              pl-2
              pr-8
              max-md:text-xs
              "
              onChange={(event) =>
                handleChangeSelect(event.currentTarget.value)
              }
            >
              <option value="総人口">総人口</option>
              <option value="年少人口">年少人口</option>
              <option value="生産年齢人口">生産年齢人口</option>
              <option value="老年人口">老年人口</option>
            </select>
          </div>
          <h2 className="text-2xl font-semibold border-l-4 border-gray-400 px-8 py-2 mb-8 max-md:text-xl max-md:px-4">
            人口推移グラフ
          </h2>
          <Graph populationdata={populationdata} label={label} />
        </div>
      </section>
    </main>
  );
}
