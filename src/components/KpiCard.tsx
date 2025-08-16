import { ReactNode } from 'react'

interface KpiCardProps {
  title: string
  value: string | number
  color?: 'green' | 'blue' | 'red' | 'yellow'
  icon?: ReactNode
}

const colorMap = {
  green: 'bg-green-100 text-green-800',
  blue: 'bg-blue-100 text-blue-800',
  red: 'bg-red-100 text-red-800',
  yellow: 'bg-yellow-100 text-yellow-800',
}

export default function KpiCard({ title, value, color = 'green', icon }: KpiCardProps) {
  const colors = colorMap[color]

  return (
    <div className={`p-4 rounded ${colors} flex items-center gap-4`}>
      {icon && <div className="w-8 h-8">{icon}</div>}
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  )
}