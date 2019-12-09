import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../styles/SearchBar.css";
import Select from 'react-select';
import { Checkbox, Button } from 'antd';

const languageOptions = [
    { label: 'None', value: "" },
    { label: 'Java', value: "java" },
    { label: 'Python', value: "python" },
    { label: 'JavaScript', value: "javascript" },
    { label: 'Scala', value: "scala" },
    { label: 'React', value: "react" },
    { label: 'Angular', value: "angular" },
    { label: 'SQL', value: "sql" },
];


export default class SearchComponent extends Component {

     constructor(props) {
           super(props);

           this.state = {
               jobType: "",
               isSponsorshipAvailable: true,
               language: "",
               location: ""
           }
       }

        setJobType = event => {
               return event.target.checked === true ?
                   this.setState({
                       jobType: "Full Time"
                   })
                   :
                   this.setState({
                       jobType: "Part Time"
                   });
           }

           setSponsorshipAvailable = event =>
               this.setState({
                   isSponsorshipAvailable: event.target.checked
               });

           setLanguage = language =>
               this.setState({
                   language: language
               });

    render() {

    console.log(this.props.isAuthenticated)
        return (
            <div className="container-fluid searchbar">
                <div class="row">
                     <div class="col-2">
                              {
                                 this.props.isAuthenticated &&
                                <input className={"form-control wbdv-search-bar input-lg"}
                                    type="text"
                                    placeholder="Search for jobs"
                                    onChange={event => this.props.searchTextChanged(event.target.value)}
                                    aria-label="Search" />
                              }
                     </div>
                      <div class="col-2">
                           {
                             this.props.isAuthenticated &&

                                 <Select options={languageOptions}
                                     onChange={opt => this.setLanguage(opt.value)} />

                           }
                      </div>
                      <div class="col-1 checkbox-center">
                               {
                                 this.props.isAuthenticated &&
                                 <div>
                                     <Checkbox onChange={this.setJobType}>Full Time</Checkbox>
                                 </div>
                               }

                      </div>
                       <div class="col-2">
                            {
                               this.props.isAuthenticated &&
                               <div>
                                   <Checkbox onChange={this.setSponsorshipAvailable}>Sponsorsip available</Checkbox>
                               </div>
                            }
                       </div>





                       <div class="col-3">
                           {
                               this.props.isAuthenticated &&
                               <input className={"form-control wbdv-search-bar input-lg"}
                                   type="text"
                                   placeholder="Enter a location"
                                   onChange={event => this.props.locationTextChanged(event.target.value)}
                                   aria-label="Search" />
                           }
                       </div>
                       <div class="col-2">
                           <Link to={`/jobs`}>
                               <button className="btn btn-success wbdv-search-bar"
                                   type="button"
                                   onClick={() =>
                                       this.props.searchJobs(this.props.searchText,
                                           this.state.language,
                                           this.state.jobType,
                                           this.state.isSponsorshipAvailable,
                                           this.props.locationText)}>
                                   <span className={"text-center"}>
                                       Search
                                       </span>
                               </button>
                           </Link>
                       </div>

                </div>
            </div>

        )
    }
}