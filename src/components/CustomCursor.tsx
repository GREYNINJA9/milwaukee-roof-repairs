import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [cursorText, setCursorText] = useState('')
  const [isHovering, setIsHovering] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 })
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 })

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  useEffect(() => {
    if (!isDesktop) return
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [isDesktop, cursorX, cursorY])

  useEffect(() => {
    if (!isDesktop) return
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest('[data-cursor]')
      if (interactive) {
        setIsHovering(true)
        setCursorText(interactive.getAttribute('data-cursor') || '')
      } else {
        setIsHovering(false)
        setCursorText('')
      }
    }
    window.addEventListener('mouseover', handleOver)
    return () => window.removeEventListener('mouseover', handleOver)
  }, [isDesktop])

  if (!isDesktop) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[200] mix-blend-difference"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full bg-warm-white flex items-center justify-center"
          animate={{
            width: isHovering ? 80 : 8,
            height: isHovering ? 80 : 8,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          {isHovering && (
            <motion.span
              className="text-charcoal text-xs font-semibold tracking-wider"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {cursorText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>
      <style>{`* { cursor: none !important; }`}</style>
    </>
  )
}
