import React, { useState } from "react"
import Pagination from "../../components/Pagination"
const BlogCard = React.lazy(() => import('../../components/BlogsCard'))

const BlogCardList = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    function changePage(page: number) {
        setPageNumber(page)
    }


    return (
        <div className="my-28">
            <h1 className="text-2xl xs:text-5xl text-center font-extrabold capitalize pb-4 title">
                Updates, ideas, and resources
            </h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3   p-4 gap-6">
                {Array.from({ length: 2 }, (_, index) => (
                    <BlogCard key={index} />
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