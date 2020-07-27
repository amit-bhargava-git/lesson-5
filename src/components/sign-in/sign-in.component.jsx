import React,{Component} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';

class SignIn extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit=event=>{
        event.preventDefault();
        this.setState({email:'', password:''});
    }

    handleChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value})
    }

    render(){
       return( <div className='sign-in'>
            <h2> I Aleready have an account!</h2>
            <span>Sign in with your existing credentials !!</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput name="email" type="email" value={this.state.email}  required handleChange={this.handleChange} label="Email"></FormInput>
                <FormInput name="password" type="password" value={this.state.password} required handleChange={this.handleChange} label="Password"></FormInput>
                <CustomButton type="Submit">Sign In</CustomButton> 
            </form>
        </div>)
    }
}

export default SignIn;