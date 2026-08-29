import { faker } from "@faker-js/faker";
import supabase from "../service/supabase";

async function uploadGuests() {
  const guests = Array.from({ length: 20 }).map(() => ({
    email: faker.internet.email(),
    fullName: faker.person.fullName(),
  }));

  const { data, error } = await supabase
    .from("guests")
    .insert(guests.map((guest) => guest))
    .select();

  if (error) {
    console.log(error);
    throw new Error("Guest could not upload to supabase");
  }

  return data;
}

async function insertBookings() {
  // Get all cabins
  const { data: cabins, error: cabinsError } = await supabase
    .from("cabins")
    .select("id");

  // Get all guests

  const { data: guests, error: guestsError } = await supabase
    .from("guests")
    .select("id");

  const cabinIds = cabins.map((cabin) => cabin.id);
  const guestIds = guests.map((guest) => guest.id);

  const newBookings = guestIds.map((guestId) => ({
    guestId: guestId,
    cabinId: cabinIds[1],
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 86400000 * 3).toISOString(), // +3 days
    totalPrice: 100,
    numGuests: 1,
    status: "unconfirmed",
  }));

  const { data: booking, error: bookingError } = await supabase
    .from("bookings")
    .insert(newBookings)
    .select();

  if (bookingError) {
    console.log(bookingError);
  }

  console.log("click");

  return booking;
}

function Uploader() {
  return (
    <button
      onClick={insertBookings}
      className="bg-primary mt-10 cursor-pointer rounded-2xl px-5 py-2 text-white"
    >
      Upload Bookings
    </button>
  );
}

export default Uploader;
