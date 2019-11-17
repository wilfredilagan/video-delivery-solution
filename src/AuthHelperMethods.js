import decode from 'jwt-decode';
import axios from 'axios';

export default class AuthHelperMethods{
    constructor(domain){
        //Only for production
        this.domain = domain || 'http://localhost:4000' //API server domain
    }
    login = async (username, password) =>{ 

        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json"
        }

        if (this.loggedIn()){
            headers['Authorization'] = "Bearer" + this.getToken();
        }
        
        try {

        
        const token = await axios({
            method: 'post',
            url: 'http://127.0.0.1:4000/api/authenticate', 
            headers: headers,
            data: {
                username: username,
                password: password
            }
        })
        
        this.setToken(token.data.token)
        return Promise.resolve(token);
        }catch{
        }
        

    }
    loggedIn = () => {
        const token = this.getToken();
        console.log('token: ' + token);
        return !!token && !this.isTokenExpired(token);
    }
    
    isTokenExpired = token =>{
        try{
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000){
                return true;
            } else return false;
        } catch (err){
            console.log("expired check failed! Line 42: AuthService.js");
            return false;
        }
    };

    setToken = idToken => {
        localStorage.setItem("id_token", idToken);
    }

    getToken = () => {
        return localStorage.getItem("id_token")
    }
    
    logout = () => {
        localStorage.removeItem("id_token");
    }

    getConfirm = () => {
        //use jwt-decode to decode token
        let answer = decode(this.getToken());
        console.log("Recieved answer!");
        return answer;
    }

    checkStatus = response => {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) {
          // Success status lies between 200 to 300
          return response;
        } else {
          var error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
    };
}