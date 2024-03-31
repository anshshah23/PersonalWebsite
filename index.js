let hoverPar=document.querySelector('#hoverPar')
let bgpar=document.querySelector('#bgpar')
let logo=document.querySelector('#logo')
console.log(bgpar)

window.addEventListener("scroll",()=>{
    let value=window.scrollY;
    console.log(value)
    hoverPar.style.display="block"
    hoverPar.style.left=`${-value*0.2}vw`
    hoverPar.style.top=`${value*0.06}vw`
    hoverPar.style.width=`${value*0.15}vw`

    bgpar.style.webkitFilter='blur('+(value*0.08)+'px)'
    logo.style.top=`${-value*0.15}vw`

    // logo.style.position="fixed"

})

document.querySelector('.menu-icon').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
  });  

// Wait for the content to load
window.addEventListener('DOMContentLoaded', (event) => {
    // Get all project elements
    const projects = document.querySelectorAll('.project');

    // Loop through each project
    projects.forEach(project => {
        // Set up event listener for mouseover
        project.addEventListener('mouseover', () => {
            // Show project details with animation
            project.querySelector('.project-details').style.display = 'block';
            project.querySelector('.project-details').classList.add('fade-in');
        });

        // Set up event listener for mouseout
        project.addEventListener('mouseout', () => {
            // Hide project details
            project.querySelector('.project-details').style.display = 'none';
            project.querySelector('.project-details').classList.remove('fade-in');
        });
    });
});
