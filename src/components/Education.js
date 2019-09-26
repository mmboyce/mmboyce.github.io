import React from 'react';

class Education extends React.Component {
    render(){
        return(
            <div id="education" class="section">
                <h1>Education</h1>
                <div id="umuc" class="school">
                    <h2>University of Maryland Global Campus</h2>
                    <h3>Bachelor of Science</h3>
                    <p>Computer Science</p>
                    <h5>September 2019 - July 2020 <i>(Expected)</i></h5>
                </div>
                <div id="ud" class="school">
                    <h2>University of Delaware</h2>
                    <h3>Bachelor of Arts</h3>
                    <p>Computer Science</p>
                    <h5>August 2016 - September 2019 <i>(Transferred from)</i></h5>
                </div>
            </div>
        );
    }
}

export default Education;