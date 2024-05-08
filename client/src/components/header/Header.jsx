import "./header.css"

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">Find Your</span>
                <span className="headerTitleLg">Recipes</span>

            </div>
            <img className="headerImg" src="/images/foodbg.jpeg" alt="" />
        </div>
    )
}
