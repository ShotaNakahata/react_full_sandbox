/* eslint-disable react/react-in-jsx-scope */
// import RSCDemo from "@/components/RSCDemo";
// import ClientDemo from "@/components/ClientDemo";
// import fs from 'node:fs/promises';
import UsePromiseDemo from "@/components/UsePromiseDemo";
import { Suspense } from "react";
import fs from 'node:fs/promises';


export default async function Home() {
  const fetchPromise = new Promise((resolve) =>
    setTimeout(async() => {
      const data = await fs.readFile('dummy-db.json', 'utf-8');
      const users = JSON.parse(data);
      resolve(users)
    }, 2000))


  return (
    <main>
      <Suspense fallback={<p>Now Loading...</p>}>
        <UsePromiseDemo userPromise={fetchPromise} />
      </Suspense>
    </main>
  );
}