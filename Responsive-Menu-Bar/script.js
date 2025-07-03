const showMenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    toggle.addEventListener('click',()=>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}

console.log( showMenu('nav-toggle','nav-menu'))