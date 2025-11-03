import Column1 from "@/assets/photo/column-1.jpg";
import Column2 from "@/assets/photo/column-2.jpg";
import Column3 from "@/assets/photo/column-3.jpg";
import Column4 from "@/assets/photo/column-4.jpg";
import Column5 from "@/assets/photo/column-5.jpg";
import Column6 from "@/assets/photo/column-6.jpg";
import Column7 from "@/assets/photo/column-7.jpg";
import Column8 from "@/assets/photo/column-8.jpg";

export interface RecommendedCategory {
  title: string;
  subtitle: string;
  bgColor: string;
}

export interface ColumnArticle {
  image: string;
  date: string;
  time: string;
  text: string;
  tags: string[];
  category?: "column" | "diet" | "beauty" | "health";
}

export const RECOMMENDED_CATEGORIES: RecommendedCategory[] = [
  { title: "RECOMMENDED COLUMN", subtitle: "オススメ", bgColor: "bg-dark-600" },
  { title: "RECOMMENDED DIET", subtitle: "ダイエット", bgColor: "bg-dark-600" },
  {
    title: "RECOMMENDED BEAUTY",
    subtitle: "美容",
    bgColor: "bg-dark-600",
  },
  { title: "RECOMMENDED HEALTH", subtitle: "健康", bgColor: "bg-dark-600" },
];

export const COLUMN_ARTICLES: ColumnArticle[] = [
  {
    image: Column1,
    date: "2021.05.17",
    time: "23:25",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
    category: "column",
  },
  {
    image: Column2,
    date: "2021.05.17",
    time: "23:25",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
    category: "diet",
  },
  {
    image: Column3,
    date: "2021.05.17",
    time: "23:25",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
    category: "beauty",
  },
  {
    image: Column4,
    date: "2021.05.17",
    time: "23:25",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
    category: "health",
  },
  {
    image: Column5,
    date: "2021.05.17",
    time: "23:25",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
    category: "column",
  },
  {
    image: Column6,
    date: "2021.05.17",
    time: "23:25",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
    category: "diet",
  },
  {
    image: Column7,
    date: "2021.05.17",
    time: "23:25",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
    category: "beauty",
  },
  {
    image: Column8,
    date: "2021.05.17",
    time: "23:25",
    text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
    category: "health",
  },
];

// Mock API functions
export const getRecommendedCategories = async (): Promise<
  RecommendedCategory[]
> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(RECOMMENDED_CATEGORIES);
    }, 100);
  });
};

export const getColumnArticles = async (): Promise<ColumnArticle[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(COLUMN_ARTICLES);
    }, 100);
  });
};

// Filter functions
export const getArticlesByCategory = (
  category: ColumnArticle["category"]
): ColumnArticle[] => {
  return COLUMN_ARTICLES.filter((article) => article.category === category);
};

export const getArticlesByDate = (date: string): ColumnArticle[] => {
  return COLUMN_ARTICLES.filter((article) => article.date === date);
};

export const getArticlesByTag = (tag: string): ColumnArticle[] => {
  return COLUMN_ARTICLES.filter((article) => article.tags.includes(tag));
};

