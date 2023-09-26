import { Route, Routes, BrowserRouter as Router, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {

    const [model, setModel] = useState('');
    const [year, setYear] = useState(0);
    const [milage, setMilage] = useState(0);
    const [carList, setCarList] = useState('');

    useEffect( () => {
        const newCarList = JSON.parse(localStorage.getItem('carList'));
        if(newCarList){
            setCarList(newCarList);   
        }
    }, [model, year, milage]);

    const navigate = useNavigate();
    const go_to_new_page = () => {
        navigate('/filterPage');
    }
    const go_to_add = () => {
        const newCar = {
            model: model,
            year: year,
            milage: milage
        };

        if(year <= 0){
            setYear(1990);
        } 
        if(milage < 0) {
            setMilage(0);
        }
        if(model != ''){
            const carListNew = [...carList, newCar];
            localStorage.setItem('carList', JSON.stringify(carListNew));
            setCarList(carListNew);
        }

        setMilage(0);
        setYear(0);
        setModel('');


        alert('New Car is added');
    }

  return (
    <div className="App">
        <input type="text" value = {model}  onChange = {(e) => setModel(e.target.value)} placeholder="Model"/>
        <input type="number" min="0" value = {year}   onChange = {(e) => setYear(e.target.value)} placeholder="Year"/>
        <input type="number" min="0" value = {milage} onChange = {(e) => setMilage(e.target.value)} placeholder="Milage"/>

        <button onClick={go_to_add}>Add</button>
        <button onClick={go_to_new_page}>Filter Page</button>
    </div>
  );
}

export default Home;
