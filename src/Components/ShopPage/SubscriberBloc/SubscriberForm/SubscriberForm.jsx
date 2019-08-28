import React from 'react';
import Styles from './SubscriberForm.module.css';

export class SubscriberForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange (event) {
        this.setState({value: event.target.value} )
    }
    handleSubmit (event) {
        console.log(this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div className={Styles.subscrForm}>
                <form>
                    <input className={Styles.subscrTextInput} type="text" value={this.state.value}
                           placeholder={this.props.placeholder} onChange={this.handleChange} />
                    <input className={Styles.subscrBtn} type="submit"
                           onClick={this.handleSubmit} value={this.props.btnVal}/>
                </form>
            </div>
        )
    }

}