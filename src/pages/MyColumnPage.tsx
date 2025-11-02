import Container from "@/components/Container";
import Column1 from "@/assets/photo/column-1.jpg";
import Column2 from "@/assets/photo/column-2.jpg";
import Column3 from "@/assets/photo/column-3.jpg";
import Column4 from "@/assets/photo/column-4.jpg";
import Column5 from "@/assets/photo/column-5.jpg";
import Column6 from "@/assets/photo/column-6.jpg";
import Column7 from "@/assets/photo/column-7.jpg";
import Column8 from "@/assets/photo/column-8.jpg";
import GridLayout from "@/components/GridLayout";

const RECOMMENDED_CATEGORIES = [
  { title: "RECOMMENDED COLUMN", subtitle: "オススメ", bgColor: "bg-dark-600" },
  { title: "RECOMMENDED DIET", subtitle: "ダイエット", bgColor: "bg-dark-600" },
  {
    title: "RECOMMENDED BEAUTY",
    subtitle: "美容",
    bgColor: "bg-dark-600",
  },
  { title: "RECOMMENDED HEALTH", subtitle: "健康", bgColor: "bg-dark-600" },
];

const COLUMN_ARTICLES = [
  {
    image: Column1,
    date: "2021.05.17",
    time: "23:25",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    image: Column2,
    date: "2021.05.17",
    time: "23:25",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    image: Column3,
    date: "2021.05.17",
    time: "23:25",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    image: Column4,
    date: "2021.05.17",
    time: "23:25",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    image: Column5,
    date: "2021.05.17",
    time: "23:25",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    image: Column6,
    date: "2021.05.17",
    time: "23:25",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    image: Column7,
    date: "2021.05.17",
    time: "23:25",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    image: Column8,
    date: "2021.05.17",
    time: "23:25",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
];

const MyColumnPage = () => {
  return (
    <div className="px-4">
      <Container className="pt-14 pb-16">
        {/* Recommended Categories Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {RECOMMENDED_CATEGORIES.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} h-[144px] flex flex-col items-center justify-center text-center cursor-pointer hover:opacity-90 transition-opacity`}
            >
              <h3 className="text-primary-300 text-2xl-2 font-normal mb-2.5">
                {category.title}
              </h3>
              <div className="h-[1px] bg-white w-14 mb-2" />
              <p className="text-white text-lg font-light">
                {category.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Column Articles Grid */}
        <GridLayout className="gap-y-4.5">
          {COLUMN_ARTICLES.map((article, index) => (
            <div
              key={index}
              className="cursor-pointer hover:opacity-90 transition-opacity"
            >
              <div className="relative h-[144px] mb-2">
                <img
                  src={article.image}
                  alt={`Column ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-primary-300 text-white text-15px/6 px-2">
                  <span className="mr-4">{article.date}</span>
                  {article.time}
                </div>
              </div>
              <p className="text-dark-500 text-15px mb-1 line-clamp-2">
                {article.text}
              </p>
              <div className="flex gap-2 flex-wrap">
                {article.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-primary-400 text-xs font-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </GridLayout>

        {/* Load More Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-gradient-button text-white px-16 py-4 rounded-md hover:opacity-90 transition-opacity">
            コラムをもっと見る
          </button>
        </div>
      </Container>
    </div>
  );
};

export default MyColumnPage;
