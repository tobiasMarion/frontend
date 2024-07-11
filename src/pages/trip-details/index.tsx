import { Plus } from 'lucide-react';
import { useState } from "react";
import { Activities } from "./activities";
import { CreateActivityModal } from "./create-activity-modal";
import { Guests } from "./guests";
import { DestinationAndDateHeader } from "./destination-and-date-header";
import { ImportantLinks } from "./important-links";
import { Button } from '../../components/button';

export function TripDetrailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false)
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />

      <main className="px-4 flex gap-16">
        <div className="flex-1 space-y-6">
          <header className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>

            <Button onClick={openCreateActivityModal}>
              <Plus className="size-5" />
              Cadastrar Atividade
            </Button>
          </header>

          <Activities />
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks />
          <div className="h-px w-full bg-zinc-800"></div>
          <Guests />
        </div>
      </main >

      {isCreateActivityModalOpen &&
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      }
    </div >
  )
}