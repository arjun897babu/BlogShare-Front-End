import React, { useEffect,  useState } from "react"
import Pagination from "../../components/Pagination"
import { useLocation } from "react-router-dom";
import {serverInstance, endPoint } from "../../service/api";
import {  IGetAllBlogs, SingleBlog } from "../../utility/types";
import { ResponseStatus } from "../../utility/enum";
const BlogCard = React.lazy(() => import('../../components/BlogsCard'))


const BlogCardList = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [blogs, setBlogs] = useState<SingleBlog[] | null>(null)
    const [isHome, setIsHome] = useState(true)

    const location = useLocation()

    function changePage(page: number) {
        setPageNumber(page)
    }

    async function fetchData() {
        try {
            const url = isHome ? endPoint.blogs : endPoint.getUserBlog;
            const response = (await serverInstance.get<IGetAllBlogs>(url)).data
            if (response.status === ResponseStatus.SUCCESS) {
                setBlogs(response.data.blog)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (location.pathname !== '/') {
            setIsHome(false)
        } else {
            setIsHome(true)
        }
        fetchData()
    }, [location.pathname])

    function deleteCB(blogId: string) {

        setBlogs((prev) => {
            if (prev) {
                const newData = prev.filter((item) => item.uId !== blogId)
                return newData
            } else {
                return prev
            }
        })
    }
    return (
        <div className={`${isHome ? 'mt-28' : 'mt-2'}`}>
            <h1 className="text-2xl xs:text-5xl text-center font-extrabold capitalize pb-4 title">
                {isHome ? " Updates, ideas, and resources" : 'My Blogs'}
            </h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3   p-4 gap-6">
                {blogs && blogs.map((blog) => (
                    <BlogCard key={blog.uId} blogData={blog} deleteCB={deleteCB} />
                ))}
            </div>
            {totalPage > 0 &&
                <div className="flex justify-center">
                    <Pagination changePage={changePage} pageNumber={pageNumber} totalPage={totalPage} />
                </div>
            }
        </div>
    )
}

export default BlogCardList