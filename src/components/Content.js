import React, {useState} from "react";
import Button from "@mui/material/Button";
import ProjectDef from  './ProjectDef';
import AboutUs from  './AboutUs';

const Content = () => {
    const [active, setActive] = useState(true);
    return(
        <div className="content-container">
            <div className="tabs">
                <div className="tab-project" onClick={()=> setActive(true)}>
                    <h2 style={{color: active? "#c20114": null}}>
                        <Button variant="contained" disableElevation width="50px" height="50px">
                            About Project
                        </Button>
                    </h2>
                </div>
                <div className="tab-about" onClick={()=> setActive(false)}>
                <h2 style={{color: !active? "#c20114": null}}>
                    <Button variant="contained" disableElevation width="50px" height="50px">
                        About Us
                    </Button>
                </h2>
                </div>
            </div>
            { active ? <ProjectDef /> : <AboutUs /> }
        </div>
    );
}

export default Content;