import sql from "better-sqlite3";
import fs from "fs";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // throw new Error("Loading meal erro")
    return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
    console.log("in get meal")
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug)
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true })
    meal.instuction = xss(meal.instuction)
    //元々のimageとはどんなdataなのかが知りたい具体的には?meal.imageは？meal.image.nameは？
    // meal.image.split(".").pop()で行っていることは？どんなdataがどんなdataに変化するのか
    console.log("meal form saveMeal: ",meal)
    console.log("meal.image form saveMeal: ",meal.image)
    const extension = meal.image.name.split(".").pop();
    const filleName = `${meal.slug}.${extension}`
    const streem = fs.createWriteStream(`public/images/${filleName}`)
    const bufferedImage = await meal.image.arrayBuffer();
    //write(chunk: any,ここでchunkが必要と書いてあるがchunkとは何ですか？
    streem.write(Buffer.from(bufferedImage), (error) => {//「streem.write()は通常のbufferを求めている」と教材内で行っていましたがどういう意味？そのせいでbufferを制作した後なぜかまたbuffer fromというよくわからないメソッドをつける必要があるのですか？
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


// //import fs from "fs";
// import slugify from "slugify";
// import xss from "xss";これら三つの機能、ライブラリは何をするため？そして今回はどのように使用している？

