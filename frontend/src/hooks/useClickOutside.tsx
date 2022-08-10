import { useEffect, useRef } from 'react'

const useClickOutside = (handler: () => void) => {
    // ref to close form modal/dropdown on clicking outside
    const domNode = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let tempHandler = (event: MouseEvent) => {
            if (
                domNode.current &&
                !domNode.current.contains(event.target as HTMLElement)
            ) {
                handler()
            }
        }
        document.addEventListener('mousedown', tempHandler)
        return () => {
            document.removeEventListener('mousedown', tempHandler)
        }
    })

    return domNode
}

export default useClickOutside
