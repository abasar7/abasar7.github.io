const mobileMenuEl = document.getElementById("mobile-menu");
const experienceList = document.getElementById("experience-list")?.children;

function toggleMobileMenu() {
    mobileMenuEl.classList.toggle('hide')
}

function showJobDetail(idx = 0) {
    for (let i = 0; i < experienceList.length; i++) {
        if (i === idx)
            experienceList[i].children[1].classList.remove('hide');
        else
            experienceList[i].children[1].classList.add('hide');
    }
}
