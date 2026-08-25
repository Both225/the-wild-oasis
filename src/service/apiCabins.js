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

  const imageName = `${Math.random()}-${image.name}`.replaceAll("/", "");

  const imagePath = `https://aeredkmacmcilqtntrls.supabase.co/storage/v1/object/public/cabins/${imageName}`;

  const { error: storageError } = await supabase.storage
    .from("cabins")
    .upload(imageName, image);

  if (storageError) {
    console.error(storageError);
    throw new Error("Cabin image could not be uploaded");
  }

  const { data, error } = await supabase
    .from("cabins")
    .insert([
      {
        name: name,
        maxCapacity: maxCapacity,
        regularPrice: regularPrice,
        discount: discount,
        decription: decription,
        image: imagePath,
      },
    ])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be add");
  }

  return data;
}
