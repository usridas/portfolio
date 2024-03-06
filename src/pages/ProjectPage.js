import './ProjectPage.scss';
import {
    elfsterRedesignInformation,
    myViasatAppInformation,
    seniorDesignInformation,
    serotoninVideoGameInformation,
    sriLankaTeaProjectInformation,
    visualAudioAmalgamationsInformation
} from "../utils/projectDetails";

export const ProjectPage = ({tab}) => {
    let bodyContent = [];
    let projectDetails;
        switch (tab) {
        case 'elfsterRedesign':
            projectDetails = elfsterRedesignInformation;
            break;
        case 'myViasatApp':
            projectDetails =  myViasatAppInformation;
            break;
        case 'serotoninVideoGame':
            projectDetails =  serotoninVideoGameInformation;
            break;
        case 'visualAudioAmalgamations':
            projectDetails =  visualAudioAmalgamationsInformation;
            break;
        case 'seniorDesign':
            projectDetails =  seniorDesignInformation;
            break;
        case 'sriLankaTeaProject':
            projectDetails =  sriLankaTeaProjectInformation;
            break;
        default:
            projectDetails =  myViasatAppInformation;
            break;
      }
    projectDetails.body.forEach(projectDetail => {
        bodyContent.push(
            <div>
                <h2>{projectDetail.subtitle}</h2>
                <p>{projectDetail.bodyText}</p>
                <div className='extraContentContainer'>{projectDetail?.extraContent}</div>
            </div>
        )
    });
    return (
    <div>
        <h1>{projectDetails.title}</h1>
        {bodyContent}
    </div>
    )
}