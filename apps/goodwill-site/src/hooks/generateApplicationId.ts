const jobTypeMap: Record<string, number> = {
    "Business & Marketing": 1,
    Design: 2,
    Engineering: 3,
    Content: 4,
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