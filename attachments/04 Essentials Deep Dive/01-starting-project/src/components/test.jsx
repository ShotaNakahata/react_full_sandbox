export default function Button({mode="filled",children,Icon,...props}) {
    const modeClass = `${mode}-button`
     return(
        <>
        <button className={`button ${modeClass}`}>
            <span>{children}</span>
        </button>
        </>
     )
}