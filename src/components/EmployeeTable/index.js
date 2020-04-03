import React from "react";
import "./style.css";
import API from "../../API"
import Search from "../Search";



class EmployeeTable extends React.Component {

    state = {
        employees: [],
        sortOrder: ""
    }

    //API call
    componentDidMount() {
        API.search().then(results => {
            this.setState({ employees: results.data.results });
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

        

        // If descending, reverse with sortedEmployees.reverse()

        if(this.state.sortOrder === "DESC") {
            console.log("SORT BY DESC")
            sortedEmployees.reverse();
        
            console.log(sortedEmployees);
            this.setState({employees: sortedEmployees, sortOrder: "ASC"});
        } else {
            console.log("SORT BY ASC")
        
            console.log(sortedEmployees);
            this.setState({employees: sortedEmployees, sortOrder: "DESC"});
        }
        
        console.log("*************");
        console.log(this.state.employees);
        console.log("*************");
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
handleSearchChange(){
    console.log("test")
}
    render() {
            return(
                <>
                <Search handleSearchChange={this.handleSearchChange} />
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
                        {this.state.employees && this.state.employees.map(person => (
                        <tr key={person.login.uuid}>
                            <td><img src={person.picture.thumbnail}alt="thumbnail" /></td>
                            <td>{person.name.first} {person.name.last}</td>
                            {/* <td>{person.name.last}</td> */}
                            <td>{person.phone}</td>
                            <td>{person.email}</td>
                            <td>{person.dob.date}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                </>
            );
    }
}


export default EmployeeTable;