import Container from "@/components/Container";
import GridLayout from "@/components/GridLayout";
import BodyRecordChart from "@/components/BodyRecordChart";
import d01 from "@/assets/photo/d01.jpg";
import HexPolygon from "@/assets/hex-polygon.svg";
import { MEAL_CATEGORIES, FOOD_RECORDS } from "@/data/mainPageData";
import LoadingMoreSection from "@/components/LoadingMoreSection";

const MainPage = () => {
  return (
    <div className="">
      <div className="flex md:flex-row flex-col" id="graph-container">
        <div className="bg-gradient-food h-[312px] md:flex-1 md:w-full max-w-[540px] relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-blend-soft-light mix-blend-soft-light "
            style={{
              backgroundImage: `url(${d01})`,
            }}
          />
        </div>
        <div className="flex-1 bg-dark-600 w-full py-2.5 h-[312px] overflow-hidden">
          <div className="max-w-[600px] ml-12">
            <BodyRecordChart />
          </div>
        </div>
      </div>
      <div className="px-4">
        <Container className="pb-16">
          <div className="flex justify-evenly py-6 flex-wrap gap-y-4">
            {MEAL_CATEGORIES.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative h-[134px] w-[134px] justify-center"
              >
                <img
                  src={HexPolygon}
                  alt="hex-polygon"
                  className="absolute -z-10"
                />
                <item.Icon
                  color="white"
                  fill="white"
                  className="min-w-14 h-14 text-primary-400"
                />
                <span className="text-white text-xl/6 ">{item.label}</span>
              </div>
            ))}
          </div>
          <GridLayout className="mb-8">
            {FOOD_RECORDS.map((item, i) => (
              <div
                key={i}
                className="aspect-square bg-gray-200 flex justify-start items-end text-dark-600 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="bg-primary-300 p-1 pr-6 text-white text-15px">
                  {item.label}
                </div>
              </div>
            ))}
          </GridLayout>
          <LoadingMoreSection text="記録をもっと見る" />
        </Container>
      </div>
    </div>
  );
};

export default MainPage;
