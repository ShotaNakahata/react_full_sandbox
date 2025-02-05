import sql from "better-sqlite3";

const db = sql("meals.db");

// export async function getMeals() {
//     await new Promise((resolve) => setTimeout(resolve, 2000)); 
//     return await Promise.resolve(db.prepare("SELECT * FROM meals").all());
// }

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    // throw new Error("Loading meal erro")
    return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
    console.log("in get meal")
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug)
}