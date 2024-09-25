import { Halvar } from '../../font';
import { getProjectData } from '../../_fetchData';

export const metadata = {
    title: "Project Detail",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${Halvar.className}`}>{children}</body>
        </html>
    );
}
