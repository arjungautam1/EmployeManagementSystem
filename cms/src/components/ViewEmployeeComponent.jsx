import React, {Component} from 'react';
import EmployeeService from "../services/EmployeeService";

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            employee: {}

        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id)
            .then(res => {
                this.setState({employee: res.data})
            })

    }

    render() {
        return (
            <div>
                <div className={"card col-md-6 offset-md-3"}>
                    <h3 className={"text-center bg-dark text-white"}>View Employee Details </h3>
                   <hr/>
                    <div className={"card-body"}>
                        <div className={"row"}>
                            <label>First Name :</label>
                            <div>{this.state.employee.firstName}</div>
                        </div>
                        <hr/>
                        <div className={"row"}>
                            <label>Last Name :</label>
                            <div>{this.state.employee.lastName}</div>
                        </div>
                        <hr/>
                        <div className={"row"}>
                            <label>Email Id : </label>
                            <div>{this.state.employee.emailId}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;