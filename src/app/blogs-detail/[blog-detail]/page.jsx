import BlogsDetail from '../../../page/blogdetailpage';
import Provider from '../../_provider/provider';
import { getBlogdata } from '../../_fetchData';


const BlogPage = async ({ params }) => {
    let data = await getBlogdata(params['blog-detail'])
    return (
        <>
            {
                data.status == 404 ? notFound() :
                    <Provider >
                        <BlogsDetail data={data} />
                    </Provider>
            }
        </>
    )
}

export default BlogPage;