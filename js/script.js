const mobileMenuEl = document.getElementById("mobile-menu");
const experienceList = document.getElementById("experience-list")?.children;

function toggleMobileMenu() {
    mobileMenuEl.classList.toggle('hide')
}

let lastOpenedIdx = 0;
function showJobDetail(idx = 0) {
    experienceList[lastOpenedIdx].children[1].classList.add('hide');
    experienceList[idx].children[1].classList.remove('hide');
    lastOpenedIdx = idx;
}
