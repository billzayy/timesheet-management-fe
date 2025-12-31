export const handleRipple = (e: React.PointerEvent<HTMLDivElement>) => {
  e.stopPropagation()

  const el = e.currentTarget
  const rect = el.getBoundingClientRect()

  el.style.setProperty("--ripple-x", `${e.clientX - rect.left}px`)
  el.style.setProperty("--ripple-y", `${e.clientY - rect.top}px`)

  el.classList.remove("ripple-active")
  void el.offsetWidth
  el.classList.add("ripple-active")

  const cleanup = () => {
    el.classList.remove("ripple-active")
    el.removeEventListener("animationend", cleanup)
  }

  el.addEventListener("animationend", cleanup)
}
