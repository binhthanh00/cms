import axios from 'axios'
axios.defaults.headers.common.authorization = `Bearer ${localStorage.getItem("token")}`;
function onLogin(data){
    //console.log("login...")
    // let data ={
    //     username: "admin",
    //     password: "123456"
    // }
    // axios.post("https://medical-be.herokuapp.com/api/doctor/login", data)
    // .then(res =>{
    //     console.log(res)
    // })
    return axios.post("https://medical-be.herokuapp.com/api/doctor/login",data)

}

function fetchStatistic(){
    return axios.get("https://medical-backend.herokuapp.com/api/news/get-statistic")
}

export {onLogin, fetchStatistic}
// export {login}
