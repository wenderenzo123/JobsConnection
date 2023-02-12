import CardVacancy from "@/components/CardVacancy";

export default function HomeCompany() {
    return (
        <div className="grid grid-cols-1 p-8">
            <div className="flex flex-col text-gray-500">
                <span className="text-2xl font-bold">Vagas Cadastradas</span>
                <span className="text-base">Vagas Disponiveis, Finalizadas e em pausa</span>
            </div>
            <div className="grid gap-4 grid-cols-1 tab:grid-cols-2">
                <CardVacancy />
                <CardVacancy />
                <CardVacancy />
                <CardVacancy />
                <CardVacancy />
            </div>
        </div>
    )
}