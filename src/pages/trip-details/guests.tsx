import { CircleDashed, UserCog } from 'lucide-react';
import { Button } from '../../components/button'

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="block font-medium text-zinc-100">Tobias Cadoná Marion</span>
            <span className="block text-sm text-zinc-400 truncate">
              tobiascm87@gmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="block font-medium text-zinc-100">Jsão da Silva</span>
            <span className="block text-sm text-zinc-400 truncate">
              tobiascm87@gmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>

      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar Convidados
      </Button>
    </div>

  )
}