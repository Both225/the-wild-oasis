import supabase from "./supabase";
import { PAGE_SIZE } from "../utils/constains";

export async function getCabin({ filter, sortBy, page }) {
  let query = supabase.from("cabins").select("*", { count: "exact" });

  // Filter field by filter value
  if (filter) {
    if (filter.value === "no-discount")
      query.or(`${filter.field}.eq.0,${filter.field}.is.null`);
    if (filter.value === "with-discount") query.gt(`${filter.field}`, 0);
  }

  // SortBy field by direction
  if (sortBy) {
    query.order(sortBy.field, { ascending: sortBy.direction === "asc" });
  }

  // Pagination
  if (page === 0 || page) {
    const from = page * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query.range(from, to);
  }

  const { data: cabins, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be load");
  }

  return { cabins, count };
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

  // upload image to bucket
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

export async function editCabin(editCabin) {
  const supabaseUrl = "https://aeredkmacmcilqtntrls.supabase.co";

  const imageName = `${Math.random()}-${editCabin.image?.name}`.replaceAll(
    "/",
    "",
  );

  const hasImagePath =
    typeof editCabin.image === "string" &&
    editCabin.image?.startsWith(supabaseUrl);

  const imagePath = hasImagePath
    ? editCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabins/${imageName}`;

  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from("cabins")
      .upload(imageName, editCabin.image);

    if (storageError) {
      console.error(storageError);
      throw new Error("Cabin image could not be uploaded");
    }
  }

  const { data, error } = await supabase
    .from("cabins")
    .update({ ...editCabin, image: imagePath })
    .eq("id", editCabin.id)
    .select();

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be edit");
  }

  return data;
}
