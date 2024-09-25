import Provider from '../_provider/provider';;
import Blogs from '../../page/blogpage';
import { getBlogsData } from '../_fetchData/index'


const BlogsPage = async ({ searchParams }) => {

    let data = await getBlogsData(searchParams)

    return (
        <>
            <Provider>
                <Blogs data={data} />
            </Provider>
        </>
    )
}

export default BlogsPage;