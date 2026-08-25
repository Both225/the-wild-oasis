import supabase from "./supabase";

export async function getCabin() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be load");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be delete");
  }

  return data;
}

export async function addCabin(newCabin) {
  const { name, maxCapacity, regularPrice, discount, decription, image } =
    newCabin;

  const { data, error } = await supabase
    .from("cabins")
    .insert([
      {
        name: name,
        maxCapacity: maxCapacity,
        regularPrice: regularPrice,
        discount: discount,
        decription: decription,
        image: image,
      },
    ])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be add");
  }

  return data;
}
