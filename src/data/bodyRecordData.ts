export interface BodyRecordDataPoint {
  month: string;
  value1: number; // Body fat percentage
  value2: number; // Body weight
}

export const BODY_RECORD_DATA: BodyRecordDataPoint[] = [
  { month: "6", value1: 62, value2: 58 },
  { month: "7", value1: 60, value2: 56 },
  { month: "8", value1: 58, value2: 54 },
  { month: "9", value1: 56, value2: 52 },
  { month: "10", value1: 54, value2: 50 },
  { month: "11", value1: 52, value2: 48 },
  { month: "12", value1: 50, value2: 46 },
  { month: "1", value1: 48, value2: 44 },
  { month: "2", value1: 46, value2: 42 },
  { month: "3", value1: 44, value2: 40 },
  { month: "4", value1: 42, value2: 38 },
  { month: "5", value1: 40, value2: 36 },
];

export type TimePeriod = "日" | "週" | "月" | "年";

// Mock API function for fetching body record data
export const getBodyRecordData = async (
  period: TimePeriod = "年"
): Promise<BodyRecordDataPoint[]> => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real app, this would fetch different data based on the period
      // For now, we use the helper function to generate data
      const data = generateBodyRecordDataByPeriod(period);
      resolve(data);
    }, 100);
  });
};

// Generate mock data for different time periods
export const generateBodyRecordDataByPeriod = (
  period: TimePeriod
): BodyRecordDataPoint[] => {
  switch (period) {
    case "日":
      // Daily data (24 hours)
      return Array.from({ length: 24 }, (_, i) => ({
        month: `${i}時`,
        value1: 60 + Math.random() * 5,
        value2: 56 + Math.random() * 5,
      }));
    case "週":
      // Weekly data (7 days)
      return Array.from({ length: 7 }, (_, i) => ({
        month: `${i + 1}日`,
        value1: 60 - i * 0.5,
        value2: 56 - i * 0.5,
      }));
    case "月":
      // Monthly data (30 days)
      return Array.from({ length: 30 }, (_, i) => ({
        month: `${i + 1}日`,
        value1: 62 - (i / 30) * 10,
        value2: 58 - (i / 30) * 10,
      }));
    case "年":
      // Yearly data (12 months)
      return BODY_RECORD_DATA;
    default:
      return BODY_RECORD_DATA;
  }
};
