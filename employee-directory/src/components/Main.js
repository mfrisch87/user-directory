/* eslint-disable react-hooks/exhaustive-deps */
import CardContainer from "./CardContainer"
import React, { useState, useEffect } from "react";
import Container from "./Container"
import Nav from "./Nav"
import API from "../utils/API.js"

const MainSection = () =>{
    
    const [employeeList, setEmployeeListState] = useState([]);
    const [employeeDisplay, setemployeeDisplayListState] = useState([]);
    const [search, setSearch] = useState("");
    const [displayState, setDisplayState] = useState({});

    useEffect(() => {
        async function fetchMyAPI() {
        const list = await API.getEmployees(80);
                //console.log(list.data.results)

                const empList = list.data.results.map(emp =>{
                    return{
                        name:`${emp.name.first} ${emp.name.last}`,
                        firstName: emp.name.first,
                        lastName: emp.name.last,
                        phone:emp.cell,
                        age:emp.dob.age,
                        picture:emp.picture.large,
                        email:emp.email,
                    }
                })
                setEmployeeListState(empList);
                setemployeeDisplayListState(empList);
        }
        fetchMyAPI()
    }, [])
    
    useEffect(() => {
        if(!search){
            return  setEmployeeListState(employeeDisplay);
        }

        const newList = employeeList.filter(
            ({age,email,name,phone}) =>{
            if(
                age.toString().includes(search) 
                || email.includes(search) 
                || (name.toLowerCase().includes(search.toLowerCase())) 
                || phone.toString().includes(search) ){
                return true
            }return false
        })
        
        setEmployeeListState(newList)

    }, [search]);

     useEffect(() => {
         let num; 
         let num2;
         
         if(displayState.text === "Name A-Z" || 
         displayState.text === "Last A-Z" || 
         displayState.text === "Email A-Z" || 
         displayState.text === "Phone" ||
         displayState.text === "Age 0 to 100"
         ){
            num = 1; 
            num2 = -1;
         }else{
            num = -1; 
            num2 = 1;
         }

        const empList = employeeList.sort( (a, b) => a[`${displayState.sortBy}`] > b[`${displayState.sortBy}`]? num:num2)
        return setDisplayState(empList)

     },[displayState])

    const handleInputChange = event => {
        setSearch(event.target.value);
    }

    const handleSortBy = (sortBy) => {
        setDisplayState(sortBy)
    }
    return(
        <section>
            <Container>
                <Nav 
                 handleInputChange={handleInputChange}
                 handleSortBy={handleSortBy}
                 results={search}
                />
                <CardContainer empList={employeeList}/>
            </Container>
        </section>
    )
}

export default MainSection