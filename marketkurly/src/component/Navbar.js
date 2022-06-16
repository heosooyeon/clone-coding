

export default function NavBar() {
    return (
        <div className="header">
            <div id="userMenu">
                <ul class="list_menu">
                    <li class ="menu none_sub menu_join">
                    <a className="link_menu" href="/shop/memder/join.php" class="link_menu">회원가입</a></li>
                    <li class="menu none_sub menu_login">
                        <a className="link_menu" href="/shop/memder/login.php" class="link_menu">로그인</a>
                    </li>
                    <li class="menu lst">

                        <a className="link_menu" href="shop/board/list.php?id=notice" class="link_menu">고객센터</a>
                    </li>
                </ul>
            </div>
            <span id="gnbLogoContainer"></span>
            <h1 className="logo"><img className="NavBarImg" src="./img/로고-아이콘.jpg"></img></h1>
        </div>
    )
}