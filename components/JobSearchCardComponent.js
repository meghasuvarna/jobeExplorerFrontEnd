import React from 'react';
import { Link } from "react-router-dom";

export default class JobSearchCardComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-sm-4">
                <div className="card job-card" >
                 <div class="card-body">
                    <h5 class="card-title">{this.props.job.title}</h5>
 <a href={`/job/${this.props.job.id}`} class="card-link">Job Details</a>
                    </div>
                </div>
            </div>
        );
    }
}