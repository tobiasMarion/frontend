import { Link2, Plus } from 'lucide-react';
import { Button } from '../../components/button';

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Links Impotantes</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="block font-medium text-zinc-100">Reserva AirBnB</span>
            <a href="#" className="block text-xs text-zinc-400 truncate transition-all hover:text-zinc-200">
              https://www.airbnb.com.br/rooms/10470001321312313123131231231312312312311
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="block font-medium text-zinc-100">Regras da Casa</span>
            <a href="#" className="block text-xs text-zinc-400 truncate transition-all hover:text-zinc-200">
              https://www.airbnb.com.br/rooms/10470001321312313123131231231312312312311
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>

      <Button variant="secondary" size="full">
        Cadastrar novo link
        <Plus className="size-5" />
      </Button>
    </div>
  )
}