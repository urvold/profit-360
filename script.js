
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id.length>1){
      e.preventDefault();
      document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Netlify honeypot (simple anti-spam)
const form = document.querySelector('form[name="lead"]');
if(form){
  const hp = document.createElement('input');
  hp.type = 'text'; hp.name = 'company'; hp.style.display='none';
  form.appendChild(hp);
}
