import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    return await Promise.resolve(db.prepare("SELECT * FROM meals").all());
}

// export async function getMeals() {
//     console.log("getMeals() started");
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//     console.log("Fetching meals from database...");
//     const meals = db.prepare("SELECT * FROM meals").all();
//     console.log("Fetched meals:", meals);
//     return meals;
// }
