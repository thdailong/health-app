import React from "react";

const DIARY_DATA = [
  {
    date: "2021.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
];

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
      <div className="flex justify-center">
        <button className="bg-gradient-button text-white px-16 py-4 rounded-md hover:opacity-90 transition-opacity">
          自分の日記をもっと見る
        </button>
      </div>
    </div>
  );
};

export default MyDiary;
