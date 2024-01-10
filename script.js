const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slider');
});

let slideIndex = 0;
      showSlides();

      function showSlides() {
        const slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Ganti gambar setiap 5 detik
      };

      function showMoreText(){
        const next = document.getElementById('next');
        const readMore = document.querySelector('.btn');

        /*next.style.display = 'block';
        readMore.style.display = 'none';
        */

        if(next.style.display == 'none'){
          next.style.display = 'block'
          readMore.textContent = 'Show less'
        }else{
          next.style.display = 'none'
          readMore.textContent = 'Read More'
        }
      }

      function showMoreText2(){
        const next = document.getElementById('next2');
        const readMore = document.querySelector('.btn2');

        /*next.style.display = 'block';
        readMore.style.display = 'none';
        */

        if(next.style.display == 'none'){
          next.style.display = 'block'
          readMore.textContent = 'Show less'
        }else{
          next.style.display = 'none'
          readMore.textContent = 'Read More'
        }
      }
  
  /*berita*/
  function showMoreText_berita(){
    const next = document.getElementById('text-berita');
    const readMore = document.querySelector('.btn-berita');

    /*next.style.display = 'block';
    readMore.style.display = 'none';
    */

    if(next.style.display == 'none'){
      next.style.display = 'block'
      readMore.textContent = 'Show less'
    }else{
      next.style.display = 'none'
      readMore.textContent = 'Read More'
    }
  }
  
  function showMoreText_berita2(){
    const next = document.getElementById('text-berita2');
    const readMore = document.querySelector('.btn-berita2');

    /*next.style.display = 'block';
    readMore.style.display = 'none';
    */

    if(next.style.display == 'none'){
      next.style.display = 'block'
      readMore.textContent = 'Show less'
    }else{
      next.style.display = 'none'
      readMore.textContent = 'Read More'
    }
  }

  /*alert contact*/
  /alert contact/
  function confirmSendMessage(event) {
    event.preventDefault();
  
    var nameInput = document.getElementsByClassName('nameAlert')[0];
    var emailInput = document.querySelector('input[type="email"]');
    var messageInput = document.querySelector('textarea');
  
    var nameValue = nameInput.value;
    var emailValue = emailInput.value;
    var messageValue = messageInput.value;
  
    // Validasi form
    if (nameValue.trim() === '' || emailValue.trim() === '' || messageValue.trim() === '') {
      alert('Mohon lengkapi semua field.');
      return;
    }
  
    // Validasi email
    if (!validateEmail(emailValue)) {
      alert('Mohon masukkan alamat email yang valid.');
      return;
    }
  
    var confirmation = confirm("Apakah Anda ingin mengirimkan pesan ini?");
  
    if (confirmation) {
      viewAlert(nameValue);
      resetForm();
    } else {
      resetForm();
    }
  }
  
  function viewAlert(name) {
    alert('Terima Kasih ' + name + ' !1!1!');
  }
  
  function resetForm() {
    document.getElementsByClassName('nameAlert')[0].value = '';
    document.querySelector('input[type="email"]').value = '';
    document.querySelector('textarea').value = '';
  }
  
  function validateEmail(email) {
    // Validasi email menggunakan regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

