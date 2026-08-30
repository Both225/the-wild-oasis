import supabase from "./supabase";

export async function getBookings(filter) {
  let query = supabase
    .from("bookings")
    .select("*, cabinId(name), guestId(fullName, email)");

  if (filter) query.eq(filter.field, filter.value);

  const { data: bookings, error } = await query;

  if (error) {
    console.log(error);
    throw new Error("Booking could not be loaded");
  }

  return bookings;
}

export async function getBooking(id) {
  const { data: booking, error } = await supabase
    .from("bookings")
    .select("*, cabins(name), guests(fullName, email)")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Booking could not be loaded");
  }

  return booking;
}
