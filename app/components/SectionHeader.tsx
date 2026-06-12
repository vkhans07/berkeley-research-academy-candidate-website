import type { ReactNode } from 'react'

interface SectionHeaderProps {
  index: string
  children: ReactNode
}

export default function SectionHeader({ index, children }: SectionHeaderProps) {
  return (
    <div className="sec-head reveal">
      {children}
    </div>
  )
}
