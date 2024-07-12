import { CircleCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../lib/axios';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale'

interface Activity {
  date: string
  activities: {
    id: string
    title: string
    occurs_at: string
  }[]
}

export function Activities() {
  const { tripId } = useParams()

  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    api.get(`/trips/${tripId}/activities`)
      .then(response => setActivities(response.data.activities))
  }, [tripId])


  return (
    <div className="space-y-8">
      {activities.map(({ date, activities }) => (
        <div key={date} className="space-y-2.5">
          <div className="flex gap-2 items-baseline">
            <span className="text-xl font-semibold text-zinc-300">Dia {format(date, 'd')}</span>
            <span className="text-sx text-zinc-500">{format(date, 'EEEE', { locale: ptBR })}</span>
          </div>

          {activities.length > 0
            ? (activities.map(activity => (
              <div key={activity.id} className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                <CircleCheck className="size-5 text-lime-300" />
                <span className="text-zinc-100">{activity.title}</span>
                <span className="text-sm text-zinc-400 ml-auto">
                  {format(activity.occurs_at, 'HH:mm')}h
                </span>
              </div>
            )))
            : <p className="text-sm text-zinc-500">Nenhuma atividade cadastrada para essa data.</p>
          }
        </div>
      ))
      }




      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl font-semibold text-zinc-300">Dia 18</span>
          <span className="text-sx text-zinc-500">Domingo</span>
        </div>
        <div className="space-y-2.5">
          <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
            <CircleCheck className="size-5 text-lime-300" />
            <span className="text-zinc-100">Academia em grupos</span>
            <span className="text-sm text-zinc-400 ml-auto">8:00</span>
          </div>
          <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
            <CircleCheck className="size-5 text-lime-300" />
            <span className="text-zinc-100">Academia em grupos</span>
            <span className="text-sm text-zinc-400 ml-auto">8:00</span>
          </div>
        </div>
      </div>
    </div >
  )
}