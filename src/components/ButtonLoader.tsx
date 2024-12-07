import { FC } from "react"

export const ButtonLoader: FC<{ btnSize: 'sm' | 'wide' | 'full', loader: 'progress'|'spinner' }> = ({ btnSize, loader }) => {
    return loader ?
        (<progress className={`progress w-${btnSize}`}></progress>)
        : (<span className={`loading loading-spinner loading-${btnSize}`}></span>)
}