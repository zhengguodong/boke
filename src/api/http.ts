import axios from "axios"
const baseURL="http://localhost:4000"
    const server =axios.create({
        baseURL:baseURL,
        timeout:5000,
    })


server.interceptors.request.use(
    (res)=>{
        //header为可选项，先进行headers赋值
        res.headers=res.headers||{}
        res.headers.token="pass"
    },
    (err)=>{
        console.log(err);
    }
)
export default server;
