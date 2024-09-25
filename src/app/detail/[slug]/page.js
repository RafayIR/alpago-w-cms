
import { notFound } from 'next/navigation';
import Project from '../../../page/detailpage/project';
import Provider from '../../_provider/provider'
import { getProjectData } from '../../_fetchData';


const DetailPage = async ({ params }) => {

    let data = await getProjectData(params['slug'])

    return (
        <>
            {
                data.status == 404 ? notFound() :
                    <Provider >
                        <Project data={data} />
                    </Provider>

            }
        </>
    )
}


export default DetailPage;