import { login, register, User } from "@/types"


export const signUP = async(userData: register ) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/create_user`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })

        if(response.ok){
            const user_info = await signIN({username:userData.username, password:userData.password});
            return user_info;
        }
    } catch (error) {
        console.log("register user" , error);
    }
}


export const signIN = async({ username , password }:login) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login_token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                username: username,
                password: password,
                scope: '',
                client_id: '',
                client_secret: ''
            })
        })
        if(response.ok){
            const data = await response.json();
            localStorage.setItem('token', data.access_token);
            console.log(data.access_token);
            const token = data.access_token
            const user = await get_current_user(token);
            return { token, user };
        }
    } catch (error) {
        console.log("login error", error);
    }
}


export const get_current_user = async(token:string) => {
    try {
        const current_user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/api/user/me`, {
            headers: {
                'Content-Type':'application/json',
                'Authorization' : `Bearer ${token}`
            }
        })
        if(current_user.ok){
            const data = await current_user.json();
            // console.log(parseStringify(data));
            const userdata : User = {
                id: data.id,
                username: data.username,
                email: data.email,
                name: data.name,
                disabled: data.disabled,
                user_type_id: data.user_type_id,
                date_created: data.date_created,
            }
            console.log(userdata.email);
            
            return userdata;
        }
        } catch (error) {
        console.log("get current user error", error);
    }
}
