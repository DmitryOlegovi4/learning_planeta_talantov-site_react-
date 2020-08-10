import React, {Component} from "react";
import "./ArrowUp.css";

class ArrowUp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const SOME_VALUE = 400;
        if (window.scrollY >= SOME_VALUE  && !this.state.isVisible) {
            this.setState({ isVisible: true });
        } else if (window.scrollY < SOME_VALUE && this.state.isVisible) {
            this.setState({ isVisible: false });
        }
    };

    goToTop(){
        // window.scrollTo( 0, 0 );
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        // let rootElem = document.getElementById('root');
        // console.log(rootElem)
        // rootElem.scrollTop = 0;
        // window.animate({scrollTop:0}, 'slow');
    }
    render() {
        return(
            <div className='ArrowUp' style={{display : this.state.isVisible ? 'flex' : 'none'}} onClick={this.goToTop}>
                <div className='ArrowUp_arrow'>&#10132;</div>
                <p>НАВЕРХ</p>
            </div>
        )
    }
}
export default ArrowUp;