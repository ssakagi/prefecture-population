type Props = { prefectures: { prefCode: number; prefName: string }[] };

export default function CheckField({ prefectures }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {prefectures.map((prefecture) => (
        <label
          className="border-2 rounded-full hover:bg-gray-100 px-2 py-1 font-bold text-lg text-[rgb(35,39,47)]"
          key={prefecture.prefName}
        >
          <input
            className="align-[0.1rem] mr-px"
            type="checkbox"
            name="Prefecture name"
          />
          {prefecture.prefName.length === 3
            ? "　" + prefecture.prefName
            : prefecture.prefName}
        </label>
      ))}
    </div>
  );
}
