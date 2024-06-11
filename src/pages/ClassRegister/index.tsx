import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Header from '../../components/Header';

type Student = {
    name: string;
    age:number;
    frequency: number;
    isCheck:boolean;
}

const example: Student[] = [
    {
        name:"Ana",
        age:14,
        frequency:95,
        isCheck: false
    },
    {
        name:"Bruna",
        age:13,
        frequency:70,
        isCheck: false
    }
]

function ClassRegister() {

    const [students, setStudents]=useState([] as Student[]);
    const [isAllCheck, setIsAllCheck]=useState(false);

    useEffect(() => {
        setStudents(example);
    },[])

    function handleAllCheck(){
        setIsAllCheck(!isAllCheck);
    }

    function handleReset(){
        const newStudents = [...students]
        for(const student of newStudents){
            student.isCheck = false;
        }
        setStudents(newStudents)
        setIsAllCheck(false);
    }


    useEffect(()=>{
        if(students.length > 0) {
            const newStudents = [...students]
            for(const student of newStudents){
                student.isCheck = isAllCheck;
            }
            setStudents(newStudents)
        }
        
    },[isAllCheck])
    

    function handleStudentCheck(index:number){
        const newStudents = [...students]
        newStudents[index].isCheck = !newStudents[index].isCheck
        setStudents(newStudents)
    }

    return (
        <>
        <Header></Header>
            <div className="container mt-5">
                <h2>Chamada {new Date().toLocaleDateString()}</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className='d-flex justify-content-between'>
                                <input type="checkbox" checked={isAllCheck} onChange={handleAllCheck} />
                            </th>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Frequencia</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length > 0 && students.map((student,index)=>(
                            <tr key={index}>
                                <td><input type="checkbox" checked={student.isCheck} onChange={()=>handleStudentCheck(index)}/></td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.frequency}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div className="d-flex gap-2">
                    <button className="btn btn-secondary" onClick={handleReset}>Limpar seleção</button>
                    <button className="btn btn-primary">Salvar aula</button>
                </div>
            </div>
        </>
    );
}

export default ClassRegister;