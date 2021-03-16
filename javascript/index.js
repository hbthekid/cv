
let menuIsOpen = false;

function closeSideBar() {
    if( menuIsOpen ){
        sideBar.classList.remove('side-bar-open');
        sideBar.classList.add('side-bar-close');
        menuIsOpen = false
    }else{

    }
}

function openMenu(){
    const sideBar = document.querySelector('#sideBar');

    if( menuIsOpen ){
        sideBar.classList.remove('side-bar-open');
        sideBar.classList.add('side-bar-close');
        menuIsOpen = false;
    }else{
        sideBar.classList.remove('side-bar-close');
        sideBar.classList.add('side-bar-open');
        menuIsOpen = true;
    }
}

function handleScroll(id){
    /*    
    const section = document.querySelector(`#${id}`).offsetTop;
    console.log(section);
    scroll({ top:section, behavior: "smooth"})
    */
   const section = document.querySelector(`#${id}`).scrollIntoView({behavior:"smooth"});

}