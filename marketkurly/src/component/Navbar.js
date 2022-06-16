

export default function NavBar() {
    return (
        <div className="header">
            <div id="userMenu">
                <ul class="list_menu">
                    <li className="">
                        <a className="link_menu">회원가입</a>
                    </li>
                    <li>
                        <a className="link_menu">로그인</a>
                    </li>
                    <li>
                        <a className="link_menu">고객센터</a>
                    </li>
                </ul>
            </div>
            <span id="gnbLogoContainer"></span>
            <h1 className="logo"><img className="NavBarImg" src="./img/로고-아이콘.jpg"></img></h1>
        </div>
    )
}