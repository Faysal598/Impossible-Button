const btn = document.querySelector('button');
btn.addEventListener('mouseover', (e)=>{
    const height = Math.floor(Math.random() * window.innerHeight);
    const width = Math.floor(Math.random() * window.innerWidth);

    btn.style.left = `${height}px`; 
    btn.style.top = `${width}px`; 
});
btn.addEventListener('click', (e) =>{
    btn.innerText = "You Catch Me";
    document.body.style.backgroundColor = "green";
});