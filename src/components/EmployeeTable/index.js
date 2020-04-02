import React from "react";
import "./style.css";


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
        employees: employees
    }

    sortByName = () => {
      let sortedEmployees = this.state.employees.sort((a, b) 
      => {
          if(b.name > a.name) {
              return -1;
          }

          if(a.name > b.name) {
              return 1;
          }

          return 0;
        
        });

      console.log(sortedEmployees);
      this.setState({employees: sortedEmployees});
    } 

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
                        <tr key={person.id}>
                            <td>{person.image}</td>
                            <td>{person.name}</td>
                            <td>{person.phone}</td>
                            <td>{person.email}</td>
                            <td>{person.dob}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            );
    }
}


export default EmployeeTable;