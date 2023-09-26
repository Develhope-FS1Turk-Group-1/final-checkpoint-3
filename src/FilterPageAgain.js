import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './App.css';

function FilterPageAgain() {
    const [year, setYear] = useState(0);
    const [milage, setMilage] = useState(0);
    const [car, setCar] = useState({});
    
    const navigate = useNavigate();
    const go_to_new_page = () => {
        if(year <= 0){
            setYear(1990);
        }

        if(milage <= 0){
            setMilage(0);
        }
        const carFilter = {
            milage: milage,
            year: year
        }
        localStorage.setItem('car', JSON.stringify(carFilter));
        setCar(carFilter);
        setMilage('');
        setYear('')
        navigate('/FilterResult');
    }
  return (
    <div className="App">
        <input value = {year} type="number" min="0" onChange = {(e) => setYear(e.target.value)} placeholder="Year"/>
        <input value = {milage} type="number" min="0" onChange = {(e) => setMilage(e.target.value)} placeholder="Milage"/>

        <button onClick={go_to_new_page}>Search</button>
    </div>
  );
}

export default FilterPageAgain;
