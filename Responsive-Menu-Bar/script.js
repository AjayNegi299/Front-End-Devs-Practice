const showMenu = (navId,toggleId)=>{
    const toggle = document.getElementById(navId),
    nav = document.getElementById(toggleId)

    toggle.addEventListener('click',()=>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle','nav-menu')