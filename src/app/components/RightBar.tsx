import Link from "next/link"
import PopularTags from "./PopularTags"
import Recommendations from "./Recommendations"
import Search from "./Search"

const RightBar = () => {
    return (
        <div className="pt-4 flex flex-col gap-4 sticky top-0 h-max">
            <Search />
            <PopularTags />
            <Recommendations />
            <div className="flex flex-wrap gap-4 text-sm text-textGray">
                <Link href="/">Terms of service</Link>
                <Link href="/">Privacy Policy</Link>
                <Link href="/">Cookie Policy</Link>
                <Link href="/">Accesibility</Link>
                <Link href="/">Ads Info</Link>
            </div>
        </div>
    )
}

export default RightBar