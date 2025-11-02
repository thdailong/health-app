import Container from "@/components/Container";
import GridLayout from "@/components/GridLayout";
import Button from "@/components/Button";
import BodyRecordChart from "@/components/BodyRecordChart";
import d01 from "@/assets/photo/d01.jpg";
import Icons from "@/assets/icons";
import HexPolygon from "@/assets/hex-polygon.svg";
import m01 from "@/assets/photo/m01.jpg";
import l03 from "@/assets/photo/l03.jpg";
import l01 from "@/assets/photo/l01.jpg";
import l02 from "@/assets/photo/l02.jpg";
import d02 from "@/assets/photo/d02.jpg";
import s01 from "@/assets/photo/s01.jpg";

const TEXT = [
  {
    label: "Morning",
    Icon: Icons.Knife,
  },
  {
    label: "Lunch",
    Icon: Icons.Knife,
  },
  {
    label: "Dinner",
    Icon: Icons.Knife,
  },
  {
    label: "Snack",
    Icon: Icons.Cup,
  },
];

const FOODS = [
  {
    img: m01,
    label: "05.21 Morning",
  },
  {
    img: l03,
    label: "05.21 Lunch",
  },
  {
    img: d01,
    label: "05.21 Dinner",
  },
  {
    img: l01,
    label: "05.21 Snack",
  },
  {
    img: m01,
    label: "05.20 Morning",
  },
  {
    img: l02,
    label: "05.20 Lunch",
  },
  {
    img: d02,
    label: "05.20 Dinner",
  },
  {
    img: s01,
    label: "05.20 Snack",
  },
];

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
        <Container>
          <div className="flex justify-evenly py-6 flex-wrap gap-y-4">
            {TEXT.map((item, index) => (
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
            {FOODS.map((item, i) => (
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
          <div className="flex items-center mb-16">
            <Button
              variant="gradient"
              className="w-full max-w-[296px] h-14 mx-auto px-2 font-light"
            >
              記録をもっと見る
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MainPage;
