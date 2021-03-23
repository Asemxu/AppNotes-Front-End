const requestOptions = {
    method: 'POST',
    redirect: 'follow',
};

export default class User {
    constructor(){
        this.activatedAccount = async  (id) =>{
            return await sendData({'id':id},"Cuenta");
         
        }

        this.changePassword = async (userData) =>{
            return await sendData(userData,"User/Change-Password");
        }

        this.sendEmailChangePassword = async (correo) =>{
            return await sendData({'correo':correo},"User/Send-Email");
        }

        this.loginUser = async (userData) =>{
            return await sendData(userData,"Login");
        }

        this.registrarUser = async (userData) =>{
            return await sendData(userData,"Registro");
        }
    }
}

const sendData = async  (body,url) =>{
    requestOptions.body = JSON.stringify(body);
    const response = await fetch(`${process.env['REACT_APP_APIURL']}${url}`,requestOptions);
    const data = await response.json();
    return data;
}