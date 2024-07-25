import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { DarkModeSVG, LightModeSVG } from './SVGs'
import { Button } from '@nextui-org/react'
export function ThemeSwitcher(): JSX.Element | null {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Button
      title={`switch between dark and light mode (currently ${theme} mode )`}
      isIconOnly
      color="default"
      className="absolute top-1 right-2"
      size="sm"
      variant="ghost"
      aria-label="Change theme"
      onClick={() => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
      }}
    >
      {theme === 'light' ? <DarkModeSVG /> : <LightModeSVG />}
    </Button>
  )
}
