import supabase from "./supabase";

export async function getCabin() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be load");
  }

  return data;
}
