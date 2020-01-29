import axios from 'axios'


export default (method,url,data=[])=>{

    let configReq = {}
    configReq.method = method
    let type  = method==='get'?'params':'data'
    configReq.url = url 
    configReq[type] = data
    configReq.headers = {
        token:localStorage.getItem('token')
    };

    return axios(configReq).catch(error =>{
        if(error.response&&error.response.status ===404){
            alert('接口不存在')
            return
        }
        if(error.response&&error.response.status ===500){
            alert('服务器故障')
            return
        }
        if(error.response&&error.response.status ===401){
            if(window.confirm('没有权限,请登录')){
                window.location.href = '/login'
            }
            return
        }
    })


}