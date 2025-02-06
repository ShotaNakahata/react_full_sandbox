/* eslint-disable no-undef */
import sql from "better-sqlite3";
import fs from "fs";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
    console.log("in get meal")
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug)
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true })
    meal.instuction = xss(meal.instuction)
    const extension = meal.image.name.split(".").pop();
    const filleName = `${meal.slug}.${extension}`
    const streem = fs.createWriteStream(`public/images/${filleName}`)
    const bufferedImage = await meal.image.arrayBuffer();
    streem.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error("Saving Image faild")
        }
        meal.image = `/images/${filleName}`

        db.prepare(`
            INSERT INTO meals
            (title,summary,instructions,creator,creator_email,image,slug)
            VALUES(
                @title,
                @summary,
                @instructions,
                @creator,
                @creator_email,
                @image,
                @slug
                )
            `).run(meal)
    })
    
}

