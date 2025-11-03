import MyRecommend1 from "@/assets/photo/my-recommend-1.jpg";
import MyRecommend2 from "@/assets/photo/my-recommend-2.jpg";
import MyRecommend3 from "@/assets/photo/my-recommend-3.jpg";

export interface NavigationBlock {
  title: string;
  label: string;
  image: string;
  id: string;
}

export interface ExerciseRecord {
  name: string;
  kcal: string;
  time: string;
  date?: string;
}

export interface DiaryEntry {
  date: string;
  time: string;
  content: string;
}

export const NAVIGATION_BLOCKS: NavigationBlock[] = [
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

export const EXERCISE_DATA: ExerciseRecord[] = [
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
  { name: "家事全般（立位・軽い）", kcal: "26kcal", time: "10 min" },
];

export const DIARY_DATA: DiaryEntry[] = [
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

// Mock API functions
export const getNavigationBlocks = async (): Promise<NavigationBlock[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(NAVIGATION_BLOCKS);
    }, 100);
  });
};

export const getExerciseData = async (
  date?: string
): Promise<ExerciseRecord[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (date) {
        const filtered = EXERCISE_DATA.filter(
          (exercise) => exercise.date === date
        );
        resolve(filtered);
      } else {
        resolve(EXERCISE_DATA);
      }
    }, 100);
  });
};

export const getDiaryData = async (date?: string): Promise<DiaryEntry[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (date) {
        const filtered = DIARY_DATA.filter((diary) => diary.date === date);
        resolve(filtered);
      } else {
        resolve(DIARY_DATA);
      }
    }, 100);
  });
};

// Filter functions
export const getExerciseByDate = (date: string): ExerciseRecord[] => {
  return EXERCISE_DATA.filter((exercise) => exercise.date === date);
};

export const getDiaryByDate = (date: string): DiaryEntry[] => {
  return DIARY_DATA.filter((diary) => diary.date === date);
};

// Utility functions
export const getTotalCalories = (exercises: ExerciseRecord[]): number => {
  return exercises.reduce((total, exercise) => {
    const kcal = parseInt(exercise.kcal.replace("kcal", ""));
    return total + kcal;
  }, 0);
};

export const getTotalExerciseTime = (exercises: ExerciseRecord[]): number => {
  return exercises.reduce((total, exercise) => {
    const minutes = parseInt(exercise.time.replace(" min", ""));
    return total + minutes;
  }, 0);
};

