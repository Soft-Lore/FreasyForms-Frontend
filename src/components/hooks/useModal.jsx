import { useState } from 'react'

export default function useModal() {
    const [show, setShow] = useState(false)

    const toggleModal = (e) => {
        e.stopPropagation()
        setShow(data => !data)
    }

    return {
        show,
        toggleModal
    }
}
