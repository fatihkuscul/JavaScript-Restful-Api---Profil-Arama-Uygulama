const profile = new Profile(); // profile js de tanımlandı
const ui = new UI();

const searchProfile = document.querySelector('#searchProfile'); // değişkene ilgil id deki elemenı atadık

searchProfile.addEventListener('keyup',(event) => {
   ui.clear() // ui js de tanımlandı. 
    let text = event.target.value; // ilgili elemena tuş tıklandığında içindeki değeri al

    if(text!==''){ // değer boş mu kontrol ettik
        profile.getProfile(text) // profile js de tanımlanmıstı
        .then(res => {
            if(res.profile.length === 0){ // yazılan profil bulunamazsa log a yazma
                ui.showAlert(text); // ui js de tenımlandı. kullanıcı bulunamadı mesajı
            }else{ // profil bulunmuşsa log a yaz
                ui.showProfile(res.profile[0]); // ui js de tenımlandı
                ui.showTodo(res.todo);
            }
        })
        .catch(err=>{
            ui.showAlert(text);
        })
    }

});