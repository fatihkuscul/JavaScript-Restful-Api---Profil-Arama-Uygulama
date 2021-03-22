class Profile{
    constructor(){
        this.clientid = '',
        this.clinetSecret =''
    }

    async getProfile(username){
        const profileResponse = await fetch
        (`https://jsonplaceholder.typicode.com/users?username=${username}`); // ilgili linkteki istediğimiz kullanıcı adındaki profili çağırdık   
        const profile = await profileResponse.json(); // gelen bilgiyi json a dönüştürdük
        
        const todoResponse = await fetch
        (`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`); // ilgili linkteki istediğimiz profilin id si ile todo listesini çağırdı
        const todo = await todoResponse.json(); // gelen bilgiyi json a dönüştürdük
        
        return{
            profile, // gelen profili geri gönderdik
            todo  // gelen id deki todo listesini geri gönderdik
        }
    
    }
}