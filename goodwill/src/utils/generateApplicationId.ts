const jobTypeMap: Record<string, number> = {
    개발: 1,
    디자인: 2,
    기획: 3,
    마케팅: 4,
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
  