import CardVacancy from "@/components/CardVacancy";
import Link from "next/link"

export default function ApplicantHomePage(): JSX.Element {
  return (
    <div className="flex justify-center w-screen mt-10">
      <div className="grid">
          <div>
            <div className="flex justify-between mb-4" >
              <h2 className="text-2xl font-bold" >Vagas em andamento</h2>
              <Link href='/home/applicant/vacancies/ongoing' style={{ color: '#2563eb' }} className="font-bold">
                Ver todas
              </Link>
            </div>
            

            <section className="grid grid-cols-2 gap-4" >
              <CardVacancy />
              <CardVacancy />
            </section>
          </div>

          <div className="mt-6">
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-bold">Sugestões</h2>
              <Link href='/home/applicant/vacancies/suggestion' style={{ color: '#2563eb' }} className="font-bold">
                Ver todas
              </Link>
            </div>
            

            <section className="grid grid-cols-2 gap-4">
              <CardVacancy />
              <CardVacancy />
            </section>
          </div>
        </div>
    </div>
  ); 
}