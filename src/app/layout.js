
import '../styles/index.scss';
import { Halvar } from './font';
import { getHomePageData } from './_fetchData/index';



export const generateMetadata = async () => {
  let metadata = await getHomePageData()
  return {
    title: metadata?.data?.meta_title || "Alpago Properties",
    description: metadata?.data?.meta_description || "Alpago Properties",
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Halvar.className}`}>{children}</body>
    </html>
  );
}
