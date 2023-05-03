import React from 'react';

function Project(){
    return(
        <div className="row justify-content-end">
            <div className="col-12 col-md-8 card bgProject">
                <div className="card-body">
                    <h3>Projects:</h3>
                    <h4>E Learning</h4>
                    <h5>Technologies used: React.js, MongoDB, Java</h5>
                    <p>
                        E Learning is a web application which provides an interface through which users can learn new programming
                        languages by reading detailed tutorials and coding alongside. The learners can also test their knowledge
                        after completing a module. New courses and the questions for the MCQ tests can be added by the admin.
                        There is also a problem section available, where the user has to match the exact output expected by the problem.
                    </p>    
                </div>

                <div className="card-body">
                    <h4>College Management System</h4>
                    <h5>Technologies used: Java MVC</h5>
                    <p>
                        E Learning is a web application which provides an interface through which users can learn new programming
                        languages by reading detailed tutorials and coding alongside. The learners can also test their knowledge
                        after completing a module. New courses and the questions for the MCQ tests can be added by the admin.
                        There is also a problem section available, where the user has to match the exact output expected by the problem.
                    </p> 
                </div>
            </div>                
        </div>    
    )

}

export default Project;