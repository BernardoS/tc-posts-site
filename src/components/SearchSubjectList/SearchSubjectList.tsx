import { SubjectButton, SubjectList } from "./SearchSubjectListStyle";

interface SubjectListProps {
    subjectList: string[]; // Lista de assuntos passada como props
}

const SubjectSearchList:React.FC<SubjectListProps>  = ( { subjectList } ) =>{


    return (
    <SubjectList className="content-container">
        {
            subjectList.map((subject, index) => (
            <SubjectButton key={index} className="subject-button">
                {subject}
            </SubjectButton>))
        }
    </SubjectList>
    )   
}

export default SubjectSearchList;