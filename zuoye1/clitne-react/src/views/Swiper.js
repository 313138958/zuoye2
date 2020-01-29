import React, { Component } from 'react'
import { Carousel } from 'antd';
class Swiper extends Component {
    handleClick(){
        this.props.history.push('/content')
    }
    render() {
        return (
            <div className="swiper">
                <Carousel autoplay>
                    <div>
                        <h3>1 <p>随时随地</p></h3>
                    </div>
                    <div>
                        <h3>2 <p>想看就看</p></h3>
                    </div>
                    <div>
                        <h3>3 <p>您想看吗</p></h3>
                    </div>
                    <div>
                        <h3>4 <p onClick={this.handleClick.bind(this)}>立即观看</p> </h3>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default Swiper