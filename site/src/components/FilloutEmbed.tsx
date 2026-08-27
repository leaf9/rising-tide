import { useEffect } from 'react'

const SRC = 'https://server.fillout.com/embed/v1/'

/** Jada's live "Request a Free Consult" form. */
export default function FilloutEmbed() {
  useEffect(() => {
    // Fillout's embed script scans the DOM on load; re-adding it makes it
    // pick up this mount even after client-side navigation.
    document.querySelectorAll(`script[src="${SRC}"]`).forEach((s) => s.remove())
    const s = document.createElement('script')
    s.src = SRC
    s.async = true
    document.body.appendChild(s)
  }, [])
  return (
    <div className="fillout-shell">
      <div
        style={{ width: '100%', height: 500 }}
        data-fillout-id="21y4Av7pnmus"
        data-fillout-embed-type="standard"
        data-fillout-inherit-parameters
        data-fillout-dynamic-resize
      />
    </div>
  )
}
