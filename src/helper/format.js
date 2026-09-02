import { differenceInDays, format, parseISO } from "date-fns";

const bookDate = (created_at) => format(parseISO(created_at), "yyyy-MM-dd");

const daysAgo = (bookDate) => differenceInDays(new Date(), new Date(bookDate));

const nightsToStay = (endDate, startDate) =>
  differenceInDays(new Date(endDate), new Date(startDate));

export { bookDate, daysAgo, nightsToStay };
