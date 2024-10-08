import { createRequestOptions } from "../../utils/requestOptionsGenerator";
import { useAccountStore } from "../../stores/account";


export async function updatePersonalInfo(payload){

    const body = JSON.stringify({
        email: payload.email,
        firstName: payload.first_name,
        lastName : payload.last_name,
        phoneNumber: payload.phone,
    });


    const requestOptions = createRequestOptions(body, 'PUT')

    const data = await fetch(
        "http://localhost:3000/api/account/",
        requestOptions
    )
    .then(async (res) => {
        const json = await res.json()
        return {json, status : res.status}
        
    })
    .then((data)=>{
        if(data.status === 200){
            const store = useAccountStore()
            data.json['isAuth'] = true
            store.setUserData(data.json)
        }
        return

    })

    return data
}

export async function updateDeliveryInfo(payload){
    const body = JSON.stringify({
        region: payload.region,
        city: payload.city,
        postOffice : payload.postOffice,
    });


    const requestOptions = createRequestOptions(body, 'PUT')

    const data = await fetch(
        "http://localhost:3000/api/account/delivery",
        requestOptions
    )
    .then(async (res) => {
        const json = await res.json()
        return {json, status : res.status}
        
    })
    .then((data)=>{
        if(data.status === 200){
            const store = useAccountStore()
            data.json['isAuth'] = true
            store.setDeliveryData(data.json)
        }
        return

    })

    return data
}