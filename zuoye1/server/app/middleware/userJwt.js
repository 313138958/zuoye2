const jwt = require('jsonwebtoken')
const ulr = require('url')

function verifyToken (token,key){
    return new Promise(res=>{
        jwt.verify(token,key,(error,result)=>{
            if(error) throw error 
            res(result)
        })
    })
}
module.exports = options => {
    return async function gzip(ctx, next) {
      if(options.includes(url.parse(ctx.url).pathname)){
        await next()
        return 
      }

      let token = ctx.get('token')
      if(!token){
          ctx.body ={code:0,msg:'没有登录,请登录'}
          return
      }
      let info 

      try {
         info = verifyToken(token,ctx.app.config.keys)
      }
      catch(error){
            ctx.body = {code:0,msg:'权限不足,请登录'}
            return
      }
      ctx.info = info
      await next()
  }

}