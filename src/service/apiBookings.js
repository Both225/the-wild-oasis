import supabase from "./supabase";
import { PAGE_SIZE } from "../utils/constains";

export async function getBookings({ filter, sortBy, page }) {
  let query = supabase
    .from("bookings")
    .select("*, cabinId(name), guestId(fullName, email)", { count: "exact" });

  if (filter) query.eq(filter.field, filter.value);

  if (sortBy)
    query.order(sortBy.field, { ascending: sortBy.direction === "asc" });

  if (page === 0 || page) {
    const from = page * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query.range(from, to);
  }

  const { data: bookings, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error("Booking could not be loaded");
  }

  return { bookings, count };
}

export async function getBooking(id) {
  const { data: booking, error } = await supabase
    .from("bookings")
    .select("*, cabinId(name), guestId(fullName, email)")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Booking could not be loaded");
  }

  return booking;
}

export async function updateStatus({ id, status }) {
  const { data: booking, error } = await supabase
    .from("bookings")
    .update({ status: status })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error("Status can't update");
  }

  return booking;
}
