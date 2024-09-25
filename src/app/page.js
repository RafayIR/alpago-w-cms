import HomePage from '../page/homepage'
import Provider from "./_provider/provider";
import { getHomePageData } from './_fetchData/index';



export default async function Home() {

  const data = await getHomePageData()

  return (
    <>
      <Provider>
        <HomePage data={data} />
      </Provider>
    </>
  );
}
