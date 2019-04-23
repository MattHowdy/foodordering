import React, {Component} from 'react';

import Button from '../../components/Common/UI/Button'
import Input from "../../components/Common/UI/Input";


class RegistrationForm extends Component {


    render() {
        let formElementArray = this.props.formElements("reg")

        let form = (
            <form>
                {formElementArray.map(elem => (
                    <Input
                        key={elem.id}
                        id={elem.id}
                        elementType={elem.config.elementType}
                        elementConfig={elem.config.elementConfig}
                        value={elem.config.value}
                        touched={elem.config.touched}
                        invalid={elem.config.valid}
                        changed={(e) => this.props.handleChange(e, elem.id, "reg")}
                    />)
                )}
                <Button text="Register" disabled={!this.props.formIsValid} clicked={(e) => this.props.submitForm(e, "reg")}/>
            </form>
        )

        return (
            <div>
                <h1>Registration</h1>
                {form}
            </div>
        )
    }
}

export default RegistrationForm;