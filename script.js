// simple tab logic
document.querySelectorAll('nav.tabs button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelector('nav.tabs button.active').classList.remove('active');
    btn.classList.add('active');
    document.querySelector('.tab-content.active').classList.remove('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// demo form handling – stores entries in localStorage
const form = document.getElementById('signup-form');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const entries = JSON.parse(localStorage.getItem('as-early')||'[]');
    entries.push(data);
    localStorage.setItem('as-early',JSON.stringify(entries));
    document.getElementById('form-msg').classList.remove('hidden');
    form.reset();
  });
}
