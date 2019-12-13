import React, { useState } from 'react';
import './index.css';
import People from '../img/people.png';

const Diagnostico = () => {
    
    const [ step , setStep ] = useState(1);
    const [ sintomas , setSintomas ] = useState([]);
    const [finished , setFinished] = useState(false);

    const Steps = () => {
        var arr;
        switch (step) {
            //Dores externas no corpo
            case 1:
                    arr = [
                        {code:0,name:'cabeca'},
                        {code:1,name:'pescoco'},
                        {code:2,name:'peito'},
                        {code:3,name:'barriga'},
                        {code:4,name:'bracos'},
                        {code:5,name:'orgao genital'},
                        {code:6,name:'coxas'},
                        {code:7,name:'canelas'},
                        {code:8,name:'pes'}
                    ];
                    return (
                        <div>
                            
                            <div className="diag">
                                <div className="col1">
                                    <img src={People} alt="paciente"/>
                                </div>
                                <div className="col1">
                                    <h4>Onde doi?</h4>
                                    <GenerateCheckBox arr={arr}></GenerateCheckBox>
                                </div>
                            </div>
                            
                        </div>
                    );
                break;

            //sintomas padrao 
            case 2:
                    arr = [
                        {code:10,name:'enjoo'},
                        {code:11,name:'vomito'},
                        {code:12,name:'diarreia'}
                    ];
                    return (
                        <div>
                            <div className="diag">
                                <div className="col1">
                                    <img src={People} alt="paciente"/>
                                </div>
                                <div className="col1">
                                    <h4>Algum desses sintomas nas ultimas 24 horas?</h4>
                                    <GenerateCheckBox arr={arr}></GenerateCheckBox>
                                </div>
                            </div>
                            
                        </div>
                    );
                break;
            
            // Restricoes medicas
            case 3:
                    arr = [
                        {code:20,name:'Tem alergia a algum medicamento?'},
                        {code:21,name:'Usa drogas?'},
                        {code:22,name:'Ja traiu seu conjuje?'}
                    ];
                    return (
                        <div>
                            <div className="diag">
                                <div className="col1">
                                    <img src={People} alt="paciente"/>
                                </div>
                                <div className="col1">
                                    <h4>Selecione as que correspondem com seu perfil</h4>
                                    <GenerateCheckBox arr={arr}></GenerateCheckBox>
                                </div>
                            </div>
                            
                        </div>
                    );
                break;
            default:
                setFinished(true);
                    return (
                        <div>
                           teste
                        </div>
                    );
                break;
        }
        
    };

    const GenerateCheckBox = (data) => {
        const lista = data.arr.map(
            ( item ) => {
                return <li key={item.code}><label><input onClick={(e) => AddToList(item,e.target)} type="checkbox" value={item.code}></input>{item.name}</label></li>;
            }
        );
        return (
            <ul>
                {lista}
            </ul>
        )
    }

    const AddToList = (data,element) => {
        if(element.checked){
            var arr = sintomas;
            arr.push(data);
            setSintomas(arr);
        }else{
            ;
            //remover o item por id
        }

        //console.log(sintomas);
    }

    const ListaSintomas = () => {
        const lista = sintomas.map(
            ( sintoma ) => {
                return <li key={sintoma.code}>{sintoma.name}</li>
            }
        );
        return (
            <ul  className="sintomas">
                {lista}
            </ul>
        )
    };

    if(finished)
        return(
            <h1>Denge</h1>
        );
    
    return (
        
        <div className="diag">
            <div className="col1">
                <h3>Sintomas apresentados ate o momento</h3>
                <ListaSintomas></ListaSintomas>
            </div>

            <div className="col2">
                <h3>Diagnostico</h3>
                <Steps></Steps>
                <button onClick={() => setStep( step+1 )}>Avancar</button>
            </div>
            
        </div>
    );
};

export default Diagnostico;
