import {useState} from "react";

export default function Car(){
    let [car, setCar] = useState("");
    let [color, setColor] = useState("");

    const choiceCar = e => {
        switch (+e.target.value) {
            case 0:
                setCar("BMW i8");
                break;
            case 1:
                setCar("Chevrolet");
                break;
            case 2:
                setCar("Bugatti")
                break;
            case 3:
                setCar("Lamborghini")
                break;
            case 4:
                setCar("Ferrari");
                break
            default:
        }
    }
    const choiceColor = f => {
        switch (+f.target.value){
            case 0:
                setColor("Black");
                break
            case 1:
                setColor("Pink");
                break;
            case 2:
                setColor("Red");
                break;
            case 3:
                setColor("Blue");
                break;
            case 4:
                setColor("White")
                break;
            default:
        }
    }

    return (
        <div style={{paddingTop : 20}}>
            Select a car :
            <select
                onChange={e => {
                    choiceCar(e)
                }}
            >
                <option value="0">BMW i8</option>
                <option value="1">Chevrolet</option>
                <option value="2">Bugatti</option>
                <option value="3">Lamborghini</option>
                <option value="4">Ferrari</option>
            </select>
            <br/>
            Select a color :
            <select
                onChange={f => {
                    choiceColor(f);
                }}
            >
                <option value="0">Black</option>
                <option value="1">Pink</option>
                <option value="2">Red</option>
                <option value="3">Blue</option>
                <option value="4">White</option>
            </select>
            <h2>You selected a {color} - {car}</h2>
        </div>
    )
}
