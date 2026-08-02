'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AnimatedSection({ children, className = '', delay = 0, direction = 'up' }: any) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const dirs: any = { up: { y: 50 }, down: { y: -50 }, left: { x: 50 }, right: { x: -50 } }
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirs[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}