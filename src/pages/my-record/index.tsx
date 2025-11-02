import Container from "@/components/Container";
import MyRecommend1 from "@/assets/photo/my-recommend-1.jpg";
import MyRecommend2 from "@/assets/photo/my-recommend-2.jpg";
import MyRecommend3 from "@/assets/photo/my-recommend-3.jpg";
import BodyRecord from "./BodyRecord";
import MyExercise from "./MyExercise";
import MyDiary from "./MyDiary";

const NAVIGATION_BLOCKS = [
  {
    title: "BODY RECORD",
    label: "自分のカラダの記録",
    image: MyRecommend1,
    id: "body-record",
  },
  {
    title: "MY EXERCISE",
    label: "自分の運動の記録",
    image: MyRecommend2,
    id: "my-exercise",
  },
  {
    title: "MY DIARY",
    label: "自分の日記",
    image: MyRecommend3,
    id: "my-diary",
  },
];

const MyRecordPage = () => {
  const handleNavigation = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="px-4">
      <Container className="pt-14 pb-16">
        {/* Navigation Blocks Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {NAVIGATION_BLOCKS.map((block, index) => (
            <div
              key={block.title}
              className="relative h-[288px] border-24 border-primary-300 overflow-hidden cursor-pointer bg-dark-600"
              onClick={() => handleNavigation(block.id)}
            >
              <div
                className={`absolute inset-0 opacity-25 bg-cover ${
                  index !== 0 ? "bg-center" : ""
                }`}
                style={{
                  backgroundImage: `url(${block.image})`,
                  mixBlendMode: "luminosity",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-primary-300 font-normal text-25px mb-2">
                  {block.title}
                </h3>
                <p className="bg-primary-400 text-white font-light px-4 py-1 text-sm">
                  {block.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Body Record Section - Placeholder for Graph */}
        <BodyRecord />

        {/* MY Exercise Section */}
        <MyExercise />

        {/* MY Diary Section */}
        <MyDiary />
      </Container>
    </div>
  );
};

export default MyRecordPage;
