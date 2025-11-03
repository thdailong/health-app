import LoadingMoreSection from "@/components/LoadingMoreSection";
import { DIARY_DATA } from "@/data/myRecordPageData";

const MyDiary = () => {
  return (
    <div id="my-diary">
      <h2 className="text-dark-500 text-2xl-2">MY DIARY</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {DIARY_DATA.map((diary, index) => (
          <div key={index} className="border-2 border-gray-400 p-4">
            <p className="text-dark-500 text-lg/5">{diary.date}</p>
            <p className="text-dark-500 text-lg/5 mb-2">{diary.time}</p>
            <p className="text-dark-500 text-xs font-light leading-relaxed line-clamp-6 whitespace-pre-line">
              {diary.content}
            </p>
          </div>
        ))}
      </div>
      <LoadingMoreSection text="自分の日記をもっと見る" />
    </div>
  );
};

export default MyDiary;
