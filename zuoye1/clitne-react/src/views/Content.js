import React, { Component } from 'react'
class Content extends Component {
    state ={
        list:[]
    }
    handleClick(item){
        console.log(item)
        this.props.history.push('/details',{state:item})
    }
    render() {
        let Dom = this.state.list.map(item=>{
            
            return <dl key={item.id} className="dl-list">
                <dt><img src={item.cont} alt=""/></dt>
                <dd onClick={this.handleClick.bind(this,item)}>{item.title}</dd>
            </dl>
        })
        return (
            <div>
                {Dom}
            </div>
        )
    }
    componentDidMount(){
        this.Api('get','getlist').then(res=>{
            console.log(res)
            this.setState({
                list:res.data.result
            })
        })
    }
}

export default Content