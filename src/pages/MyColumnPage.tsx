import Container from "@/components/Container";
import GridLayout from "@/components/GridLayout";
import LoadingMoreSection from "@/components/LoadingMoreSection";
import { RECOMMENDED_CATEGORIES, COLUMN_ARTICLES } from "@/data/columnPageData";

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
        <LoadingMoreSection text="コラムをもっと見る" className="mt-6" />
      </Container>
    </div>
  );
};

export default MyColumnPage;
