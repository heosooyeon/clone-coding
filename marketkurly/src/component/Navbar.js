

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
            <div>
                <ul>
                    <li><img src='./img/메뉴.png'></img><a>전체 카테고리</a></li>
                    <li><a>신상품</a></li>
                    <li><a>베스트</a></li>
                    <li><a>알뜰쇼핑</a></li>
                    <li><a>특가/혜택</a></li>
                    <li><div><input placeholder="검색어를 입력해주세요."></input><img src='./img/검색-아이콘.png'></img></div></li>
                    <li><button><img src='./img/지도-아이콘.png'></img></button></li>
                    <li><button><img src='./img/하트-아이콘.png'></img></button></li>
                    <li><button><img src='./img/장바구니-아이콘.png'></img></button></li>
                </ul>
            </div>
        </div>
    )
}