"use server"
export async function shareMeal(formData) {
    "use server";
    const data = Object.fromEntries(formData);
    console.log(data)
}