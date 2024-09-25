
import Provider from '../_provider/provider';
import News from '../../page/newsdetailpage';
import { notFound } from 'next/navigation';
import { getNewsDetail } from '../_fetchData';



const NewsPage = async ({ params }) => {
    let data = await getNewsDetail(params['news-detail'])


    return (
        <>
            {
                data.status == 404 ? notFound() :
                    <Provider >
                        <News data={data} />
                    </Provider>
            }
        </>
    )
}

export default NewsPage;