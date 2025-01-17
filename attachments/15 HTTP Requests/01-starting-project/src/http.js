export async function fetchAvalilablePlace() {
    const response = await fetch("http://localhost:3000/places")
        const resData = await response.json()
        if (!response.ok) {
          throw new Error("failed to fetch places")//なぜここの条件文が必要なのか？もしfetch内のpromiseがrejectされたら自動的にcatchの方に行かないのか？それとも明示的にnew errorでerrorを生成しないとcatchがエラーがアタと認識しないのか
        }
        return resData
}