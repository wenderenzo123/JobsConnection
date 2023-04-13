import CardVacancy from "@/components/CardVacancy";
import Link from "next/link";

export default function OnGoingVacancies(): JSX.Element {
  return (
    <div className="flex justify-center w-screen mt-10 mb-10">
      <div className="grid">
          <div>
            <div className="flex justify-between mb-4" >
              <h2 className="text-2xl font-bold" >Vagas em andamento</h2>
            </div>
            

            <section className="grid grid-cols-2 gap-4" >
              <CardVacancy />
              <CardVacancy />
              <CardVacancy />
              <CardVacancy />

              <CardVacancy />
              <CardVacancy />
              <CardVacancy />
              <CardVacancy />
            </section>
          </div>
        </div>
    </div>
  )
}