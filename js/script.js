// ハンバガーメニュー
const hamburger = document.querySelector(".js-hamburger")
const drawer = document.querySelector(".js-drawer")
const body = document.body

const toggleMenu = () => {
    hamburger.classList.toggle("HamburgerIsOpen")
    drawer.classList.toggle("DrawerIsOpen")
    body.classList.toggle("IsScrollAllowed")
}

hamburger.addEventListener("click",() => {
    toggleMenu()
})

drawer.addEventListener("click",()=> {
    toggleMenu()
})
