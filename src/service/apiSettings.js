import supabase from "./supabase";

export async function getSettings() {
  const { data: setting, error } = await supabase.from("setting").select("*");

  if (error) {
    console.log(error);
    throw new Error("Counld not get setting");
  }

  return setting;
}

export async function updateSetting(updateSetting) {
  const { data: setting, error } = await supabase
    .from("setting")
    .update({ ...updateSetting })
    .eq("id", updateSetting.id)
    .select();

  if (error) {
    console.log(error);
    throw new Error("Could not update setting");
  }

  return setting;
}
