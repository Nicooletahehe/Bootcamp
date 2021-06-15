import React, {Component, createRef} from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

// add multiple matters
class Modal extends Component {
    // RULE
    // Component will re-render only when new props or state value changed

    state = {
        // greet: 'Hello',
        isOpen: true,
    };

    h1Ref = createRef();

    //is called only once when in render this component
    constructor(props) {
        super(props);
        // we have to bind this function to the Component class
        // this.closeModal = this.closeModal.bind(this);
        console.log("constructor");
        // fetch data from server
        // this.state = {
        //     isOpen: true,
        //     desc: `${props.description} and modal.js`,

        // };
        this.closeModal = this.closeModal.bind(this);
    }

    // it is called whenever my prop value or state value changed
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return {
            ...state,
            desc: `${props.description} and modal.js`,
        }
        // it doesn't work because it doesn't see the h1 element
        // document.getElementById('h1').style = "color: green";
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state !== nextState || this.props !== nextProps) {
            return true;
        }
        return false;
    }

    // calls only once
    // to register events for
    // fetch data
    // to manipulate the DOM
    componentDidMount(){
        document.addEventListener('copy', () => {
            console.log("copied");
        });
        // document.getElementById('h1').style = "color: green";
        this.h1Ref.current.style = "color: green";
    }

    // else we can write the function as an arrow function
    closeModal = () => {
        // alert("hello from the close modal");
        // this.setState({greet: "Bonjour"});
        this.setState({isOpen: false})
    }

    // to render html
    render() {
        console.log("render");
        return (
            <dialog open={this.state.isOpen}>
                <h1 ref={this.h1Ref}>{this.state.desc}</h1>
                {/* <h2>{this.state.greet}</h2> */}
                {/* <button type="button" onClick={this.closeModal}>Close</button> */}
                <Button onClick={this.closeModal}>Close</Button>
                <Input type="text"/>
            </dialog>
        )
    }
}

export default Modal;