const jobTypeMap: Record<string, number> = {
  "Business Operations": 1,
  "Finance & Marketing": 2,
  Design: 3,
  Engineering: 4,
  "Economics & Data Science": 5,
  Legal: 6,
  Content: 7,
};

export const generateApplicationId = (jobType: string, order: number) => {
  const today = new Date();
  const dateStr = today.toISOString().slice(0, 10).replace(/-/g, ""); // "YYYYMMDD"

  const jobNumber = jobTypeMap[jobType] || 0;
  const orderStr = order.toString().padStart(5, "0");

  const rawId = `${dateStr}${jobNumber}${orderStr}`;
  const hexId = parseInt(rawId, 10).toString(16).toUpperCase();

  return hexId;
};
