

export async function fetchUserPlace() {
    const response = await fetch("http://localhost:3000//user-places")
        const resData = await response.json()
        if (!response.ok) {
          throw new Error("failed to fetch user-places")
        }
        return resData
}



export async function fetchAvalilablePlace() {
    const response = await fetch("http://localhost:3000/places")
        const resData = await response.json()
        if (!response.ok) {
          throw new Error("failed to fetch places")
        }
        return resData
}

export async function updateUserPlace({places}) {
    const response = await fetch("http://localhost:3000/user-places",{
        method:"PUT",
        body:JSON.stringify({places}),
        headers:{
            "Content-type":"application/json"
        }
    });
    if (!response.ok) {
        throw new Error("failed to fetch places")
    }
    const resData = await response.json()
        return resData.message;
}