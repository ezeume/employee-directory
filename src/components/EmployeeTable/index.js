import React from "react";
import "./style.css";
import API from "../../API"



class EmployeeTable extends React.Component {

    state = {
        employees: [],
        sortOrder: ""
    }

    //API call
    componentDidMount() {
        API.search().then(results => {
        this.setState({ employees: results.data.results.map(function(result){
            result.fullName=result.name.first + " " + result.name.last
            console.log(result)
            return result;
        })});
        });
    }


//Sort people by first name
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

// // Sort people by last name
//     sortByLastName = () => {
//         let sortedEmployees = this.state.employees.sort((a, b) => {
//             if(b.name.first > a.name.first) {
//                 return -1;
//             }

//             if(a.name.first > b.name.first) {
//                 return 1;
//             }

//             return 0;
        
//         });

//         console.log(sortedEmployees);

//         // If descending, reverse with sortedEmployees.reverse()
//         if(this.state.sortOrder === "DESC") {
//             sortedEmployees.reverse();
//             this.setState({sortOrder: "ASC"});
//         } else {
//             this.setState({sortOrder: "DESC"});
//         }
//             this.setState({ employees: sortedEmployees})

//         this.setState({employees: sortedEmployees});
//     } 


    //Render the search results on the page 
    render() {
            return(
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name<button onClick={this.sortByName}>Sort</button></th>
                            {/* <th>LastName<button onClick={this.sortByLastName}>Sort</button></th> */}
                            <th>Phone</th>
                            <th>Email</th>
                            <th>DOB</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(person => (
                        <tr key={person.id.value}>
                            <td><img src={person.picture.thumbnail}alt="thumbnail" /></td>
                            <td>{person.fullName}</td>
                            {/* <td>{person.name.last}</td> */}
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