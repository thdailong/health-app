import { EXERCISE_DATA } from "@/data/myRecordPageData";

const MyExercise = () => {
  return (
    <div id="my-exercise" className="mb-14">
      <div className="bg-dark-500 px-6 py-4">
        <div className="flex items-center mb-4">
          <h2 className="text-white text-15px font-normal max-w-24">
            MY EXERCISE
          </h2>
          <p className="text-white text-xl font-normal">2021.05.21</p>
        </div>
        <div
          className="exercise-scroll grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-2 max-h-192 overflow-y-auto pr-4"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(255, 204, 33, 1) rgba(119, 119, 119, 1)",
          }}
        >
          {EXERCISE_DATA.map((exercise, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="flex-1 flex border-b border-b-gray-400 gap-4">
                <div className="text-white text-sm">•</div>
                <div className="items-start flex-1">
                  <p className="text-white text-15px/5 flex-1">
                    {exercise.name}
                  </p>
                  <p className="text-primary-300 text-15px/5">
                    {exercise.kcal}
                  </p>
                </div>
                <div className="flex gap-4 text-primary-300 text-lg">
                  <span>{exercise.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyExercise;
