import React from "react";
import "./style.css";

import API from "../../API"


const employees = [
    {
        id: 1,
        image: "pic.jpg",
        name: "Jon",
        phone: "(205) 353-9999",
        email: "jon@jon.com",
        dob: "04/01/1992"
    },
    {
        id: 2,
        image: "pic.jpg",
        name: "Jerry",
        phone: "(205) 533-2339",
        email: "jerry@jerry.com",
        dob: "04/01/1992"
    },
    {
        id: 3,
        image: "pic.jpg",
        name: "Jovi",
        phone: "(205) 342-9763",
        email: "jovi@jovi.com",
        dob: "04/01/1992"
    }

];

class EmployeeTable extends React.Component {

    state = {
        employees: [{}],
        sortOrder: ""
    }

    //API call
    componentDidMount() {
        API.search().then(results => {
        this.setState({ employees: results.data.results});
        });
    }

    // componentDidMount(){
    //     let temp = API.search()
    //     .then(function(data){
    //         console.log(data.data.results[0].picture.thumbnail)
    //         console.log(data.data.results[0].email);
    //         console.log(data.data.results[0].name.first)
    //         console.log(data.data.results[0].dob.date)

    //         this.setState({employees:data.data.results});            
    //     });
    
    // }

    sortByName = () => {
        let sortedEmployees = this.state.employees.sort((a, b) => {
            if(b.name.first > a.name.first) {
                return -1;
            }

            if(a.name.first > b.name.first) {
                return 1;
            }

            return 0;
        
        });

        console.log(sortedEmployees);

        // If descending, reverse with sortedEmployees.reverse()
        if(this.state.sortOrder === "DESC") {
            sortedEmployees.reverse();
            this.setState({sortOrder: "ASC"});
        } else {
            this.setState({sortOrder: "DESC"});
        }
            this.setState({ employees: sortedEmployees})

        this.setState({employees: sortedEmployees});
    } 

    //Render the search results on the page 
    render() {
            return(
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name<button onClick={this.sortByName}>Sort</button></th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>DOB</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(person => (
                        <tr key={person.id.value}>
                            <td><img src={person.picture.thumbnail}alt="thumbnail" /></td>
                            <td>{person.name.first}</td>
                            <td>{person.name.last}</td>
                            <td>{person.phone}</td>
                            <td>{person.email}</td>
                            <td>{person.dob.date}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            );
    }
}


export default EmployeeTable;