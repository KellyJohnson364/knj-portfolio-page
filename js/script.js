
let id
let destination
// when projecttitle is clicked on
function projectHandler(event)  {
  event.preventDefault();
  console.log(this)
  if (event.target.hasAttribute("id")) {
    id = event.target.getAttribute("id");
  }  
//modal to choose between repository and deployed site
Swal.fire({
  toast: true,
  title: 'Would you like to visit the Deployed Site or the Repository?',
  showDenyButton: true,
  background: "rgb(126, 163, 145)",
  confirmButtonColor:" #f5272e",
  denyButtonColor: "#23324f",
  confirmButtonText: `Site`,
  denyButtonText: `Repository`,
}).then((result) => {
 
  if (result.isConfirmed) {
    destination = `${id}Deploy`
  
  } else if (result.isDenied) {
    destination = `${id}Repo`
  
  }
  //destinations for each choice
 ( ( {
    brewDeploy: () => {  window.location.href = "https://kellyjohnson364.github.io/brews-and-loos/" },

    brewRepo: () => { window.location.href = "https://github.com/KellyJohnson364/brews-and-loos" },

    dinerDeploy: () => { window.location.href ="http://www.thebashfuldiner.com/"},

    dinerRepo: () => { window.location.href ="https://github.com/KellyJohnson364/the-bashful-diner"},

    weatherDeploy: () => { window.location.href ="https://kellyjohnson364.github.io/weather-dashboard/"},

    weatherRepo: () => { window.location.href ="https://github.com/KellyJohnson364/weather-dashboard"},

    passwordDeploy: () => { window.location.href ="https://kellyjohnson364.github.io/password-generator/"},

    passwordRepo: () => { window.location.href ="https://github.com/KellyJohnson364/password-generator"},

    techDeploy: () => { window.location.href ="https://vast-forest-19866.herokuapp.com/"},

    techRepo: () => { window.location.href ="https://github.com/KellyJohnson364/tech_blog"},

    planDeploy: () => { window.location.href ="https://kellyjohnson364.github.io/work-day-planner/"},

    planRepo: () => { window.location.href ="https://github.com/KellyJohnson364/work-day-planner"},

    } )[ destination ] || ( () => { window.location.href = "https://kellyjohnson364.github.io/knj-portfolio-page/"} ) )();
    
})

}
document
  .querySelector('#projects')
  .addEventListener('click', projectHandler);



