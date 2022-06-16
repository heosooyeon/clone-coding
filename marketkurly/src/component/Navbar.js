

export default function NavBar() {
    return (
        <div className="header">
            <div id="userMenu">
                <ul class="list_menu">
                    <li class ="menu none_sub menu_join">
                    <a className="link_menu_join" >회원가입</a>
                    </li>
                    <li class="menu none_sub menu_login">
                        <a className="link_menu_login"  >로그인</a>
                    </li>
                    <li class="menu lst">
                        <a className="link_menu_lst"  >고객센터</a>
                    </li>
                </ul>
            </div>
            <br></br>
            <span id="gnbLogoContainer"></span>
            <h1 className="logo"><img className="NavBarImg" src="./img/로고-아이콘.jpg"></img></h1>
        </div>
    )
}