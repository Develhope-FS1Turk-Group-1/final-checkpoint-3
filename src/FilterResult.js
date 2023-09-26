import { useEffect, useState } from 'react';
import './App.css';

function FilterResult() {
    const [carList, setCarList] = useState(JSON.parse(localStorage.getItem('carList')) || '');
    const [car, setCar] = useState(JSON.parse(localStorage.getItem('car') || ''));
    const [filterCarList, setFilterCarList] = useState([]);
    useEffect( () => {
        if(carList){
            const filteredList = carList.filter((tempCar) => {
                return (
                    parseInt(tempCar.year) >= parseInt(car.year) &&
                    parseInt(tempCar.milage) <= parseInt(car.milage)
                );
              });
              setFilterCarList(filteredList);    
        }
       
    }, [carList, car]);
  return (
    <div className="App">
        <ol>
            {filterCarList.map((car, index) => (
                <li key={index}>
                    <label>Model: {car.model} </label><label>Year: {car.year} </label><label>Milage: {car.milage}</label>
                </li>
                
            ))}
        </ol>
        
    </div>
  );
}

export default FilterResult;
