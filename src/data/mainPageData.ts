import Icons from "@/assets/icons";
import m01 from "@/assets/photo/m01.jpg";
import l03 from "@/assets/photo/l03.jpg";
import d01 from "@/assets/photo/d01.jpg";
import l01 from "@/assets/photo/l01.jpg";
import l02 from "@/assets/photo/l02.jpg";
import d02 from "@/assets/photo/d02.jpg";
import s01 from "@/assets/photo/s01.jpg";

export interface MealCategory {
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface FoodRecord {
  img: string;
  label: string;
  date: string;
  mealType: "Morning" | "Lunch" | "Dinner" | "Snack";
}

export const MEAL_CATEGORIES: MealCategory[] = [
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

export const FOOD_RECORDS: FoodRecord[] = [
  {
    img: m01,
    label: "05.21 Morning",
    date: "2021.05.21",
    mealType: "Morning",
  },
  {
    img: l03,
    label: "05.21 Lunch",
    date: "2021.05.21",
    mealType: "Lunch",
  },
  {
    img: d01,
    label: "05.21 Dinner",
    date: "2021.05.21",
    mealType: "Dinner",
  },
  {
    img: l01,
    label: "05.21 Snack",
    date: "2021.05.21",
    mealType: "Snack",
  },
  {
    img: m01,
    label: "05.20 Morning",
    date: "2021.05.20",
    mealType: "Morning",
  },
  {
    img: l02,
    label: "05.20 Lunch",
    date: "2021.05.20",
    mealType: "Lunch",
  },
  {
    img: d02,
    label: "05.20 Dinner",
    date: "2021.05.20",
    mealType: "Dinner",
  },
  {
    img: s01,
    label: "05.20 Snack",
    date: "2021.05.20",
    mealType: "Snack",
  },
];

// Mock API functions for testing
export const getMealCategories = async (): Promise<MealCategory[]> => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MEAL_CATEGORIES);
    }, 100);
  });
};

export const getFoodRecords = async (): Promise<FoodRecord[]> => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(FOOD_RECORDS);
    }, 100);
  });
};

// Filter functions for testing
export const getFoodRecordsByDate = (date: string): FoodRecord[] => {
  return FOOD_RECORDS.filter((record) => record.date === date);
};

export const getFoodRecordsByMealType = (
  mealType: FoodRecord["mealType"]
): FoodRecord[] => {
  return FOOD_RECORDS.filter((record) => record.mealType === mealType);
};

