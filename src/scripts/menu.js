document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon")
    const navigation = document.querySelector(".navigation")

    menuIcon.addEventListener("click",  () => {
        navigation.classList.toggle("active")
        menuIcon.classList.toggle("active")
    })

    document.addEventListener("click", (e) => {
        if (!menuIcon.contains(e.target) && !navigation.contains(e.target)) {
            navigation.classList.remove("active")
            menuIcon.classList.remove("active")
        }
    })
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header")
        const navigation = document.querySelector(".navigation")
        if (window.scrollY > 50) {
            header.classList.add("scroll-header")
            navigation.classList.add("scroll-header")
        } else {
            header.classList.remove("scroll-header")
            navigation.classList.remove("scroll-header")
        }
    })
})