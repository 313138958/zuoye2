'use strict';
const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken')
const md5 = require('md5')
class UserController extends Controller {
    async login(){
        const { ctx , app} = this
        const { username,password } = ctx.request.body
        let pwd = md5(password)
        const result = await ctx.service.user.login(username)
        if(result===0){
            ctx.body={code:0,msg:'用户不存在'}
            return
        }
        if(result[0].password!==pwd){
            ctx.body={code:0,msg:'密码错误'}
            return
        }

        const token = jwt.sign({...result[0]},app.config.keys)
        ctx.body = {
            code:1,
            msg:'登录成功',
            token
        }
    }
    async registry(){
        const { ctx , app} = this
        const { username,password } = ctx.request.body
        let pwd = md5(password)
        const result = await ctx.service.user.registry(username)
        if(result.length>0){
            ctx.body={code:0,msg:'用户名已存在'}
            return
        }
        const results = await ctx.service.user.adduser(username,pwd)
        if(results.affectedRows>0){
            ctx.body={
                code:1,
                msg:'注册成功',
            }
        }
        
    }
    async getlist(){
        const { ctx , app} = this
        const result = await ctx.service.user.getlist()
        ctx.body ={
            code:1,
            msg:'',
            result
        }
    }
    async getlook(){
        const { ctx } = this
        const result = await ctx.service.user.getlook(ctx.request.body)

        ctx.body={
            code:1,
            msg:"",
            result
        }
    }
}

module.exports = UserController;
