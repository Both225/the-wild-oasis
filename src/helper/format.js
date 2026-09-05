import { differenceInDays, format, parseISO } from "date-fns";

const bookDate = (created_at) => format(parseISO(created_at), "yyyy-MM-dd");

const daysAgo = (bookDate) => differenceInDays(new Date(), new Date(bookDate));

const nightsToStay = (endDate, startDate) =>
  differenceInDays(new Date(endDate), new Date(startDate));

const formatCurrency = (value, currency = "USD", locale = "en-US") => {
  if (value === null || value === undefined) return "";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  }).format(value);
};

export { bookDate, daysAgo, nightsToStay, formatCurrency };
