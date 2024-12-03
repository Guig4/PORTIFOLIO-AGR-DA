function addDivs(clickedDiv) {
    const parentDiv = clickedDiv.parentNode;


    if (parentDiv.querySelector('.new-box-link')) {

      const contatosMinimizar = parentDiv.querySelectorAll(".new-box-link");
      contatosMinimizar.forEach(link => link.remove());
      return; 
    }


    for (let i = 1; i <= 3; i++) {
      const link = document.createElement('a');
      
      
        link.classList.add('new-box-link');
      
      
      const newDiv = document.createElement('div');
      if(i===3){
        newDiv.classList.add('new-box3');
      }else{
       newDiv.classList.add('new-box'); 
      }
      

      const img = document.createElement('img');
      
      
      const text = document.createElement('span');
      
      if (i===1){
        link.href = 'mailto:Guilherme22122004@gmail.com?subject=Entrevista&body=Olá,%20gostaria%20de%20marcar%20uma%20entrevista%20com%20você.%20Tem%20algum%20horário%20disponível?';
        img.src = './gmail.png';
        text.textContent = 'Guilherme22122004@gmail.com';
      } else if (i===2){
        link.href = 'https://wa.me/5581985721098?text=Olá,%20gostaria%20de%20marcar%20uma%20entrevista.%20Você%20tem%20algum%20horário%20disponível?';
        img.src = './whatsapp.png';
        text.textContent = '+55 81 985721098';
      }else if(i===3){
        link.href = 'https://www.instagram.com/guilhermeprofi/profilecard/?igsh=MXAwZDYwd2N1N3BqNA==';
        img.src = './insta.png';
        text.textContent = '@guilhermeprofi';
        
      }

      img.classList.add('imgsconta');
      
      text.classList.add('textconta');
      

      newDiv.appendChild(img);
      newDiv.appendChild(text);
      link.appendChild(newDiv);

      parentDiv.appendChild(link);
    }
  }
