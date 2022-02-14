const left = document.getElementsByClassName('left')
const right = document.getElementsByClassName('right')

function animation (arr,clasad){
    let options = {
        root: null,
        rootMargin: '40px',
        threshold: 1.0
      }
    
      const pr=(entrada,observador)=>{
          entrada.map((e,i)=>{
              if(e.isIntersecting){
                e.target.classList.add(clasad)
              }
          })
      }
    const lefanimation = new IntersectionObserver(pr,options)
    
    for(let x=0;x<arr.length;x++){
        lefanimation.observe(arr[x])
    }
}

animation(left,'leftanimation')
animation(right,'rightanimation')
