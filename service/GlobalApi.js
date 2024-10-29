import axios from "axios";


const API_KEY=import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient=axios.create({
    baseURL: import.meta.env.VITE_BASE_URL + "/api/",
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${API_KEY}`
    }
})


const CreateNewResume=(data)=>axiosClient.post('/user-resumees',data);

const GetUserResumes=(userEmail)=>axiosClient.get('/user-resumees?filters[userEmail][$eq]='+userEmail);

const UpdateResumeDetail=(id,data)=>axiosClient.put('/user-resumees/'+id,data)

const GetResumeById=(id)=>axiosClient.get('/user-resumees/'+id+"?populate=*")

const DeleteResumeById=(id)=>axiosClient.delete('/user-resumees/'+id)

export default{
    CreateNewResume,
    GetUserResumes,
    UpdateResumeDetail,
    GetResumeById,
    DeleteResumeById
}