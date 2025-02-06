"use server"
import { saveMeal } from "./meals";
export async function shareMeal(formData) {
    "use server";
    const data = Object.fromEntries(formData);
    await saveMeal(data)
}