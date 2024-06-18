
import {useState, useEffect} from 'react';
import { Subject } from '../../types/Subject';
import SubjectCard from '../../components/SubjectCard';
import Header from '../../components/Header';



const example: Subject[]=[
    {
        name: "Lingua Portuguesa",
        description: "Materia designada para aprendizado de literatura e regras de linguagem."
    },
    {
        name: "Matemática",
        description: "Materia designada para aprendizado de cálculos e funções."
    },
    {
        name: "História",
        description: "Materia designada para aprendizado do passado."
    },
    {
        name: "Geografia",
        description: "Materia designada para aprendizado de economia e mapas."
    }
]
function SubjectList() {

    const [subjects, setSubjects]=useState([] as Subject[]);
    
    useEffect(()=>{
        setSubjects(example);
    })
  
    return (
    <>
        <Header />
        <main className="container mt-4">
            <div className="row gy-4 gx-3">
                {subjects.length > 0 && subjects.map((subject,index)=>(
                    <div className="col">
                        <SubjectCard subject={subject} key={index} />
                    </div>
                ))}
            </div>
        </main>
    </>

  );
}

export default SubjectList;