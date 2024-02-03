import React from "react";
import './StoryPage.css';


const StoryPage = () =>{

    return(
<div className="StoryPage">
    <div className="story">
        <h1>About Us: Our Story</h1>
        <p>"During my graduate studies, I worked very closely with health care practitioners and world leading researchers in tackling antimicrobial resistance. Microbial resistance to antibiotics, including last-resort ones, is a rising concern. As a result, there are limited options to treat patients with infections, and in some cases, there are no viable options leading to poor prognosis including patients’ death. The antibiotic therapeutic regimen, especially for hospitalized patients, is decided based on a standardized antibiotic susceptibility (phenotypic) test. The therapeutic outcomes often do not correlate with the phenotypic results from these tests, occasionally leading to therapeutic failure. During my work it became very apparent that there was a need for a database that would provide an array of complementary information to optimize the decisions related to antibiotic regimes."</p>
        <h1 className="slogan">Bridging the gap to beat Bacteria</h1>
        <div className="signature"> -Joshua Adams</div>
    </div>
</div>
    );

}
export default StoryPage