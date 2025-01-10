export default function Input({label,invalid,...props}) {
    return(
        <p>
            <label className=" " >{label}</label>
            <input className=""  {...props}/>
        </p>
    )
}