import React, { Component } from 'react';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import './employee.css';

class Employee extends Component {
    state = {
        employees: [],
        flag: false,
        employeeMoreData: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                this.setState({
                    employees: response.data
                })
            }
            )
            .catch(error => {
                console.log(error)
            }
            )
    }
    getMoreDetails = (index) => {
        let memployeeMoreData = this.state.employees[index];
        console.log(memployeeMoreData);

        this.setState({
            flag: !this.state.flag,
            employeeMoreData: memployeeMoreData
        })
    }

    render() {

        // let temployeeMoreData = (<div>
        //     {this.state.employeeMoreData.email}
        //     <br />
        //     {this.state.employeeMoreData.phone}
        //     <br />


        // </div>)
        // let temployeeMoreData = (<div>
        //     {
        //         this.state.employees.map(employee => {
        //             return (
        //                 <div>
        //                     {employee.email}
        //                 </div>
        //             )
        //         })
        //     }
        // </div>)
        // if(this.state.flag===false){
        //     temployeeMoreData=null
        // }

        let renderEmployeeData = (

            <div className="row ">
                {
                    this.state.employees.map((employee, index) => {

                        return (
                            <div className="col-lg-4">
                                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                                <h2>{employee.name}</h2>

                                <p style={{ textAlign: "center" }}>Email: {employee.email}<br />

                                            Company: {employee.company.name}</p>

                                {/* <p> <button onClick={() => { this.getMoreDetails(index) }}>More Details</button></p>
                                {this.state.flag ? <div>{employee.email}</div> : null} */}



                                <Accordion >
                                    <Card>

                                        <Accordion.Toggle variant="link" eventKey="0">
                                            More Details
                                         </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body><div>
                                                Phone:{employee.phone}<br />
                                            City: {employee.address.city}

                                            </div> </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                </Accordion>





                            </div>
                        )
                    })
                }
            </div>

        )

        // if(this.state.flag===false){
        //     temployeeMoreData=null;
        // }

        return (
            <div className="container employee">
                {renderEmployeeData}
            </div>
        )
    }
}


export default Employee;