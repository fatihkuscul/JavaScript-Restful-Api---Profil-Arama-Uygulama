class UI{
    constructor(){
        this.profileContainer = document.querySelector('#profileContainer');
        this.alert = document.querySelector('#alert');
    }

    showProfile(profile){
        this.profileContainer.innerHTML =`
        
        <div class="card card-body">
            <div class="row">
                <div class="col-md-3">
                <a href="https://placeholder.com"><img src="https://via.placeholder.com/150" class="img-thummbnail"></a>                </div>

                <div class="col-md-9">
                    <h1>İletişim</h1>
                    <ul class="list-group mt-3">
                        <li class="list-group-item">
                            İsim: ${profile.name}
                        </li>

                        <li class="list-group-item">
                            Kullanıcı adı: ${profile.username}
                        </li>

                        <li class="list-group-item">
                            E-mail: ${profile.email}
                        </li>

                        <li class="list-group-item">
                            Adres: ${profile.address.street} sokak - 
                            ${profile.address.city} şehri
                        </li>

                        <li class="list-group-item">
                            Telefon: ${profile.phone}
                        </li>
                    </ul>
                    <h4 class="mt-4">Yapılacaklar Listesi</h4>
                    <ul id="todo" class="list-group">

                    </ul>
                </div>
            </div>
        </div>

        `
    }

    showAlert(text){
        this.alert.innerHTML = `
            Aradığınız (${text}) maalesf bulunamadı
        `
    }

    showTodo(todo){
        let html="";

        todo.forEach(element => {
            if(element.completed){   
            html += ` 
                    <li class="list-group-item bg-grey">
                    <i class="fas fa-check"></i> ${element.title}
                    </li>
                `;
            }else{
                html += ` 
                <li class="list-group-item bg-secondary">
                <i class="fas fa-times-circle"></i> ${element.title}
                </li>
                `;
            }
        });

        this.profileContainer.querySelector('#todo').innerHTML = html;
    }

    clear(){ // profil bulunursa alert temizlenir. bulunamazsa eski bulunmuş profil bilgileri silinir
        this.profileContainer.innerHTML="";
        this.alert.innerHTML="";
    }
}