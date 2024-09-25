import { Halvar } from '../font';
import { getNewsDetail } from '../_fetchData';

export const metadata = {
    title: "News Detail",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${Halvar.className}`}>{children}</body>
        </html>
    );
}
