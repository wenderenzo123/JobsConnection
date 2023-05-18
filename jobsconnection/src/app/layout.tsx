import { CreateContextProviderCompany } from '@/contexts/register_company';
import './globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <head />
            <body>
                <div>
                    <CreateContextProviderCompany>
                        {children}
                    </CreateContextProviderCompany>
                </div>
            </body>
        </html>
    )
}