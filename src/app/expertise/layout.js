import { Halvar } from '../font';
import { getExpertiseData } from '../_fetchData';


export const generateMetadata = async () => {
    let metadata = await getExpertiseData()

    return {
        title: metadata?.data?.meta_title || "Expertise",
        description: metadata?.data?.meta_description || "Expertise",
    }
}


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${Halvar.className}`}>{children}</body>
        </html>
    );
}
