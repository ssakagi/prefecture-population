import CheckField from "../components/CheckField";

type Props = { prefectures: { prefCode: number; prefName: string }[] };

export default function Main({ prefectures }: Props) {
  return (
    <main>
      <section>
        <div className="w-5/6 m-auto mt-16">
          <h2 className="text-2xl font-semibold border-l-4 border-gray-400 px-8 py-2 mb-8">
            都道府県
          </h2>
          <CheckField prefectures={prefectures} />
        </div>
      </section>
    </main>
  );
}
