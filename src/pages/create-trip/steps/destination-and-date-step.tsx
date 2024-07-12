import { format } from 'date-fns';
import { ArrowRight, Calendar, MapPin, Settings2, X } from 'lucide-react';
import { useState } from 'react';
import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Button } from '../../../components/button';

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  closeGuestsInput: () => void
  openGuestsInput: () => void
  setDestination: (destination: string) => void
  eventStartAndEndDates: DateRange | undefined, 
  setEventStartAndEndDates: (dateRange: DateRange | undefined) => void
}


export function DestinationAndDateStep({
  isGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput,
  setDestination,
  eventStartAndEndDates,
  setEventStartAndEndDates
}: DestinationAndDateStepProps) {

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  function openDatePicker() {
    setIsDatePickerOpen(true)
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false)
  }

  const displayedDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to
    ? `${format(eventStartAndEndDates.from, "d' de 'LLL")} até ${format(eventStartAndEndDates.to, "d' de 'LLL")}`
    : null

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          onChange={(event) => setDestination(event.target.value)}
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent placeholder-zinc-400 outline-none flex-1"
        />
      </div>

      <button onClick={openDatePicker} disabled={isGuestsInputOpen} className="flex items-center gap-2 outline-none">
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-zinc-400 min-w-40 text-left">{displayedDate || 'Quando?'}</span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="mx-6 rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <header className="gap-2 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Selecione a data</h2>
              <button onClick={closeDatePicker}><X className="size-5 text-zinc-400" /></button>
            </header>

            <DayPicker mode="range" selected={eventStartAndEndDates} onSelect={setEventStartAndEndDates} />
          </div>
        </div>
      )}

      <div className="w-px h-6 bg-zinc-800"></div>

      {isGuestsInputOpen ? (
        <Button onClick={closeGuestsInput} variant="secondary">
          Alterar Local/Data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput}>
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )
      }
    </div >
  )
}