const Service = require('egg').Service;

class UserService extends Service {
   async login(username){
      const result = await this.app.mysql.select('user',{where:{username}})
      return result
   }
   async registry(username){
     const result = await this.app.mysql.select('user',{where:{username}})
     return result
   }
   async adduser (username,password){
    const result = await this.app.mysql.insert('user',{username,password})
    return result
   }
   async getlist(){
    const result = await this.app.mysql.select('program')
    return result
   }
   async getlook({id}){
     const result = await this.app.mysql.select('content',{where:{guishu:id}})
     return result
   }
}

module.exports = UserService;