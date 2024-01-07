import Link from "next/link"

const Surah = ({surah}) => {
  return (
    <div className="w-full h-16 flex justify-center px-10 items-center main-background p-bold-20 gap-10 border-2">
        <p className="main-text p-semibold-20">
          {`{${surah.ayahs.length}}`}
        </p>
        <h3 className="text-gray-800">
          <Link href={`/surahs/${surah.number}`}>{surah.englishName} - {surah.name}</Link>
        </h3>
    </div>
)
}

export default Surah