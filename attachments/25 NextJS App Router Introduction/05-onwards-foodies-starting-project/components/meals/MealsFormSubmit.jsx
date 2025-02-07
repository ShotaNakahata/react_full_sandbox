"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'
//useFormStatusとuseFormStateの違いは？
//そしてそれらを使用する際にどのようにその対象のformが選ばれますか？
// またそのルーツに従って正しく求めているfromのstatusを取得したい場合はどのようにしますか？

function MealsFormSubmit() {
    const { pending } = useFormStatus()
    return (
        <button disabled={pending}>
            {pending ? "submitting..." : "Share Meal"}
        </button>
    )
}

export default MealsFormSubmit