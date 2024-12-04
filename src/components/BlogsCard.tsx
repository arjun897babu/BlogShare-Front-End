const BlogCard = () => {
    return (

        <div className="card card-compact bg-base-100 shadow-xl">
            {/* article image*/}
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body bg-white ">
                {/* title */}
                <h2 className="card-title">Shoes!</h2>
                {/* context with text ellipse */}
                <p className="truncate text-sm font-thin leading-4">kkddddddddddddddddddddddddddddddddddddddddddddddddddddddddkk</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-neutral">Read Now ...</button>
                </div>
            </div>
        </div>

    )
}

export default BlogCard