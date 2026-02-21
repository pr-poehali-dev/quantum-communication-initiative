import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function PlayAnimation() {
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaying((prev) => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        className="w-20 h-20 rounded-full border-2 border-foreground/30 flex items-center justify-center"
        animate={{ scale: playing ? 1.15 : 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          animate={{ opacity: playing ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-foreground border-b-[12px] border-b-transparent ml-1" />
        </motion.div>
        <motion.div
          animate={{ opacity: playing ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute flex gap-1.5"
        >
          <div className="w-[5px] h-5 bg-foreground rounded-sm" />
          <div className="w-[5px] h-5 bg-foreground rounded-sm" />
        </motion.div>
      </motion.div>
    </div>
  )
}

function ColorGrading() {
  const [hue, setHue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prev) => (prev + 60) % 360)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full gap-2">
      {[0, 60, 120].map((offset, i) => (
        <motion.div
          key={i}
          className="w-10 h-16 rounded-lg"
          animate={{ backgroundColor: `hsl(${(hue + offset) % 360}, 60%, 50%)` }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      ))}
    </div>
  )
}

function CutCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < 48 ? prev + 1 : 0))
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      <motion.span
        className="font-serif text-5xl md:text-6xl text-foreground tabular-nums"
        key={count}
      >
        {count}
      </motion.span>
      <span className="text-sm text-muted-foreground">склеек в ролике</span>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Что я делаю
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <PlayAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Съёмка</h3>
              <p className="text-muted-foreground text-sm mt-1">Профессиональная видеосъёмка для бизнеса и брендов.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <ColorGrading />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Цветокоррекция</h3>
              <p className="text-muted-foreground text-sm mt-1">Кинематографичный цвет и атмосфера в каждом кадре.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <CutCounter />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Монтаж</h3>
              <p className="text-muted-foreground text-sm mt-1">Динамичный ритм и точная нарезка под вашу задачу.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
