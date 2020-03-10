import React, {Component} from 'react';

import '../App.css';


const emailRegex = RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/)

const formValid = ({formErrors, ...rest}) => {
    let valid = true;

   

    Object.values(formErrors).forEach(val=>{
        console.log(val)
        val.length > 0 && (valid = false)
    });
    
 

    // Object.values(rest).forEach(val =>{
    //     val === null && (valid = false);
    // });
    // }
//    if(valid==false){
    
//         console.log("errorrrs")
//     } 

// if(valid==true){
//         conso le.log("we are fine");
    
// } 
 
    return valid;

}



class SignUpForm extends Component {

    constructor(props){
        super(props);
        this.state={
            email: null,
            password: null,
            name:null,
            
            formErrors:{
                email: '',
                password: "",
                name:'',
            }

        }
    
    }

  

    handleSubmit = e =>{
        e.preventDefault();
        if(formValid(this.state.formErrors)){
            console.log(
            `email: ${this.state.email};
            password: ${this.state.password};
            name: ${this.state.name};
            `
            )
        }
        else{
            console.log("display!")
        }
    }

    handleChange = e =>{
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;

        switch (name){
            case 'name':
                formErrors.firstName = value.length < 3 
                ? "minium 3 characters required"
                : "";
                break;

            case 'email':
                formErrors.email = emailRegex.test(value)  
                ? " "
                :'invalid email address';
                break;

            case 'password':
                formErrors.password = value.length < 3  
                ? "minium 3 characters required"
                :"";
                break;
                default:
                break;


        }

        this.setState({formErrors, [name]:value}, ()=>{
            console.log(this.state)
        })

    }

   render(){
       const {formErrors} = this.state;
       return (
        <div className="FormCenter">
            <form className="FormFields" onSubmit={this.handleSubmit} noValidate>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="name">Full Name</label><br></br>
                    <input 
                    className={formErrors.name.length > 0 ? "error" : null}
                    type="text" 
                    id="name" 
                    className="FormField__Input" 
                    placeholder="enter your full name" 
                    name="name" 
                    noValidate
                    onChange={this.handleChange}/>

                    {formErrors.name.length>0 && (
                        <span className="errorMessage">{formErrors.name}</span>
                    )}

                </div>

                <div className="FormField">
                    <label className="FormField__Label" htmlFor="email">Email</label><br></br>
                    <input 
                    className={formErrors.email.length > 0 ? "error" : null}
                    type="text" 
                    id="email" 
                    className="FormField__Input" 
                    placeholder="enter your email" 
                    name="email" 
                    noValidate
                    onChange={this.handleChange}/>
                </div>

                <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">PassWord</label><br></br>
                    <input 
                    className={formErrors.password.length > 0 ? "error" : null}
                    type="password" 
                    id="password" 
                    className="FormField__Input" 
                    placeholder="enter your password" 
                    name="password" 
                    noValidate
                    onChange={this.handleChange}/>
                </div><br></br>
     

                <div className="FormField">
                    <button type="submit" className="FormField__Button mr-20">Sign Up</button>
                    

                </div>

            </form>
        </div>
    )
   }
}
export default SignUpForm;