import { redirect } from "react-router-dom"

//logout Action
export function action() {
    localStorage.removeItem("token")
    return redirect("/")
}