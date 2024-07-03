import { useState} from "react";
import Header from "../Components/Header.js";
import "../Style/main.css";
import states from '../data.json';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, } from 'react-redux';
import { addUser } from "../Redux/reducers.js";
import { Badge } from 'test-jovanna';
import { Link } from "react-router-dom";

function Formulaire() {
    const dispatch = useDispatch();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [error, setError] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        dateStart: '',
        street: '',
        city: '',
        zipCode: '',
        state: '',
        department: ''
    })

    const [isValidated, setIsValidated] = useState({
        firstName: false,
        lastName: false,
        dateOfBirth: false,
        dateStart: false,
        street: false,
        city: false,
        zipCode: false,
        state: false,
        department: false,

    });

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        dateStart: '',
        street: '',
        city: '',
        zipCode: '',
        state: '',
        department: ''

    });
    // Validation et Gestion des erreurs 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (value.trim() === '') {
            setError(prevError => ({
                ...prevError, [name]: `${name} is required`
            })); 
            setIsValidated(prevValidated => ({
                ...prevValidated, [name]: false
            }));
        } else {
            setError(
                prevError => ({
                    ...prevError,
                    [name]: ''
                }));
            setIsValidated(prevValidated => ({
                ...prevValidated,
                [name]: true
            }));
        }
    };

    const handleDate = (event) => { // retour un objet Event.
        const date = event.target.value;

        if (!date) {
            setIsValidated(currentValue => ({
                ...currentValue,
                dateStart: false
            }));
            setError(prevError => ({
                ...prevError, dateStart: `Date is required`
            }));
        } else {
            setIsValidated(currentValue => ({
                ...currentValue,
                dateStart: true
            }));
            setError(
                prevError => ({
                    ...prevError,
                    dateStart: ''
                }));
        }

        setFormData({
            ...formData,
            dateStart: date
        });
    };


    const handleDateDoB = (e) => {
        const date = e.target.value;

        if (!date) {
            setIsValidated(currentValue => ({
                ...currentValue,
                dateOfBirth: false
            }));
            setError(prevError => ({
                ...prevError,
                dateOfBirth: 'Date of Birth is required'
            }));

        } else {
            setIsValidated(currentValue => ({
                ...currentValue,
                dateOfBirth: true
            }));
            setError(prevError => ({
                ...prevError,
                dateOfBirth: ''
            }));
        }
        setFormData({
            ...formData,
            dateOfBirth: date
        });

    };


    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        let newErrors = {};

        Object.keys(formData).forEach(key => {
            if (formData[key].trim() === '') {
                newErrors[key] = `${key} is required`;
                valid = false;
            }
        });

        setError(newErrors);

        if (valid) {
            dispatch(addUser(formData));
            setIsSubmitted(true);
            // Réinitialise les champs du formulaire
            setFormData({
                firstName: '',
                lastName: '',
                dateOfBirth: '',
                dateStart: '',
                city: '',
                zipCode: '',
                state: '',
                department: '',
                street: ''
            });

            // Réinitialise l'état de validation
            setIsValidated({
                firstName: false,
                lastName: false,
                dateOfBirth: false,
                dateStart: false,
                city: false,
                zipCode: false,
                state: false,
                department: false,
                street: false
            });
            setTimeout(() => { // permet de réinitialiser la modale de confirmation
                setIsSubmitted(false);
            }, 3000);
        } else {
            setIsSubmitted(false);
        };

        console.log(isValidated)
        console.log(valid)
        
    }

    return (
        <div className='input-space'>
            <Header />
            <Link to="/ValidateResult">View result</Link>
            <form >
                <label>First Name</label>
                <input
                    className="input-element"
                    id="fn"
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={formData.firstName}
                    
                />
                {error.firstName && <div className="error-message">{error.firstName}</div>}
               
                <label>Last Name</label>
                <input
                    className="input-element"
                    id="ln"
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={formData.lastName}

                />
                {error.lastName &&<div className="error-message">{error.lastName}</div>}
               

                <label>Date of Birth</label>
                <input 
                    type="date"
                    className='input-space date'
                    onChange={handleDateDoB}
                    value={formData.dateOfBirth}
                    name="Date of Birth"
                    min='1950-01-01'
                    max='2010-12-31'

                />
                {error.dateOfBirth && <div className="error-message">{error.dateOfBirth}</div>}

                <label>Start Date</label>
                <input
                    type='date'
                    name="dateStart"
                    className='input-space date'
                    onChange={handleDate}
                    value={formData.dateStart}
                    min="1950-01-01"
                    max=""
                />
                {error.dateStart && <div className="error-message">{error.dateStart}</div>}


                <label>Street</label>
                <input
                    className="input-element"
                    id="st"
                    name="street"
                    onChange={handleChange}
                    value={formData.street}

                />
                {error.street && <div className="error-message">{error.street}</div>}

                <label>City</label>
                <input
                    className="input-element"
                    id="ct"
                    name="city"
                    onChange={handleChange}
                    value={formData.city}
                />
                {error.city && <div className="error-message">{error.city}</div>}

                <label>State</label>
                <div className="input-element">
                    <select
                        name='state'
                        className="input-select"
                        value={formData.state}
                        onChange={handleChange}>
                        <option value=""> Select a state</option>
                        {states.map((state) => (
                            <option key={state.abbreviation}
                                name="state"
                                value={state.abbreviation}>{state.name}
                            </option>
                        ))}
                    </select>
                </div>
                {error.state && <div className="error-message">{error.state}</div>}

                <label>Zip Code</label>
                <input
                    className="input-element"
                    id="zc"
                    name="zipCode"
                    onChange={handleChange}
                    value={formData.zipCode}
                />
                {error.zipCode && <div className="error-message">{error.zipCode}</div>}

                <label>Department</label>
                <div className="input-element">
                    <select
                        name="department"
                        id="dt"
                        className="input-select"
                        value={formData.department}
                        onChange={handleChange}
                    >
                        <option value="">Select your Department</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Legal">Legal</option>
                    </select>
                </div>
                {error.department && <div className='errorValidation'>{error.department}</div>}

                <button className="btn-save" onClick={handleSubmit}>Save</button>
                {isSubmitted && <Badge label="Form submitted successfully!" kind="primary" className="validate" />}
               
            </form>
  
        </div>
    )
}

export default Formulaire;