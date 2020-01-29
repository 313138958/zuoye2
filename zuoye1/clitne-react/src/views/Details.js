import React, { Component } from 'react'

class Details extends Component {
    state = {
        list:this.props.location.state.state,
        cont:[]
    }
    render() {
        let Dom = this.state.cont.map(item=>{
            return <div key={item.id}>
                {item.header}
            </div>
        })
        return (
            <div>
                {Dom}
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props)
        this.Api('post','/getlook',{id:this.state.list.id}).then(res=>{
            this.setState({
                cont:res.data.result
            })
        })
    }
}
export default Details