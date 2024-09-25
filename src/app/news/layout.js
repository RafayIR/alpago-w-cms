import { Halvar } from '../font';
import { getNewLandingdata } from '../_fetchData';

export const metadata = {
    title: "News",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${Halvar.className}`}>{children}</body>
        </html>
    );
}
