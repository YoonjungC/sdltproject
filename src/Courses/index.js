import React from 'react';
import './index.css';
import { course_data } from '../Data';
import Card from '../Card'
import { Earth } from 'react-ionicons'
import { ColorPalette } from 'react-ionicons'
import { Flask } from 'react-ionicons'
import { MusicalNotes } from 'react-ionicons'
import { Laptop } from 'react-ionicons'
import { BarChart } from 'react-ionicons'


export default class Courses extends React.Component {

    state = {
        search: "",
        courses: []
    }

    //set search state
    onInputChange=async(evt)=>{
       this.setState({search: evt.target.value})
       if(evt.target.value.length===0) {
        this.setState({courses: course_data})
        console.log("evt.target.value", evt.target.value)
       }
    }

    //set courses state
    changeEvents=()=> {
        let course_list = 
        course_data.filter((course) => {
            if(this.state.search.length>0) {
                return course.name.toLowerCase().includes(this.state.search.toLowerCase())
            }
                return true
            })
        this.setState({courses: course_list})
    } 

    //when enter is pressed, activate the search button 
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          console.log('do validate');   
          this.changeEvents();
        }
      }
    
    render() {
        return (
            <div className="courses-body"> 
                <h1> Explore Courses </h1>
                <div className="search-container">
                    <input type="text" value={this.state.search} onChange={this.onInputChange} onKeyDown={this._handleKeyDown} placeholder="Search for Courses..." id="search-bar"/> 
                    <button id="submit-button" onClick={()=> {this.changeEvents()}}> Search </button> 
                </div>
                <div className="filter-container"> 
                    <button> <p> Math <BarChart color="black" width="11px"/>  </p> </button>
                    <button>  <p> Science <Flask color="black" width="11px"/>  </p> </button>
                    <button>  <p> Humanities <Earth color="black" width="11px"/> </p> </button>
                    <button>  <p> Arts <ColorPalette color="black" width="11px"/></p></button>
                    <button> <p> Computer Science <Laptop color="black" width="11px"/> </p> </button>
                    <button> <p> Music <MusicalNotes color="black" width="11px"/> </p> </button>
                </div>
                <div className="coursecards-container"> 
                    {
                        /* { console.log("courses:", this.state.courses)} */
                        this.state.courses.map(course => (
                        <Card course={course}/> 
                        ))
                    }
                </div>
            </div>
        )
    }
}