
const openProjects = () => {

    const projects = document.querySelector(".c-projects");

    if(!projects.classList.contains("is-open")){

        projects.classList.add("is-open");

    } else{

        return;

    }

}

const closeProjects = () => {

    const projects = document.querySelector(".c-projects");

    if(projects.classList.contains("is-open")){

        projects.classList.remove("is-open");

    } else{

        return;

    }

}

const openServices = () => {

    const projects = document.querySelector(".c-services");

    if(!projects.classList.contains("is-open")){

        projects.classList.add("is-open");

    } else{

        return;

    }

}

const closeServices = () => {

    const projects = document.querySelector(".c-services");

    if(projects.classList.contains("is-open")){

        projects.classList.remove("is-open");

    } else{

        return;

    }

}

const isInView = (element) => {
    const rect = element.getBoundingClientRect();
    const threshold = 0.5;
    const elementHeight = rect.bottom - rect.top;
    const visibleArea = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

    return (visibleArea / elementHeight) >= threshold;
};

  
const updateActiveNav = () => {

    const sections = document.querySelectorAll('.scroll-target');
    const navItems = document.querySelectorAll('.c-header__item');
  
    sections.forEach((section, index) => {

      if (isInView(section)) {

        navItems.forEach(item => item.classList.remove('is-active'));
        navItems[index].classList.add('is-active');

      }
    });
}
  

  window.addEventListener('scroll', updateActiveNav);
  window.addEventListener('load', updateActiveNav);


const openEmail = () => {

    const email = "oriolfarssac@gmail.com";
    const subject = "I want to contat you regarding...";
    const body = "";
    console.log(email, subject, body);
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
}