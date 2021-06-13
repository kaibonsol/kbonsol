/* Code adapated from https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4 */

import React from 'react'

export default function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false)
    const domRef = React.useRef()
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => entry.isIntersecting && setVisible(true))
        })
        observer.observe(domRef.current)
    }, [])
    return (
        <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            {props.children}
        </div>
    )
}
