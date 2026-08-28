import supabase from "./supabase";

export async function getBookings() {
  const { data: bookings, error } = await supabase
    .from("bookings")
    .select("*, cabinId(*), guestId(*)");

  if (error) {
    console.log(error);
    throw new Error("Booking could not be loaded");
  }

  return bookings;
}

export async function getBooking(id) {
  const { data: booking, error } = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Booking could not be loaded");
  }

  return booking;
}
