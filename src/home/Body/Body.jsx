import React, { useState } from 'react'

const Body = () => {
    const [heightValue, setHeightValue] = useState('');
    const [weightValue, setWeightValue] = useState('');
    const [bmiValue, setBmiValue] = useState('');
    const [bmiMessage, setBmiMessage] = useState('');

    const handelSubmit = (e) => {
        e.preventDefault();
        if (heightValue && weightValue) {
            const heightInMeters = heightValue / 100;
            const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
            setBmiValue(bmi);

            let message = '';
            if (bmi < 18.5) {
                message = 'You are Underweight';
            } else if (bmi >= 18.5 && bmi < 25) {
                message = 'You are Normal weight';
            } else if (bmi >= 25 && bmi < 30) {
                message = 'You are Overweight';
            } else {
                message = 'You are Obese';
            }
            setBmiMessage(message);
        } else {
            setBmiValue('');
            setBmiMessage('');
        }
    };
    return (
        <>
            <div className="bmi_calculater">
                <div className="container">
                    <div className="bmi_inner">

                        <form method="POST" onSubmit={handelSubmit}>
                            <h1>Check your BMI</h1>
                            <div className="input_container">
                                <label for="height">Enter Your Height (cm):</label>
                                <input type="text" id="height" value={heightValue} onChange={(e) => setHeightValue(e.target.value)}
                                />
                            </div>
                            <div className="input_container">
                                <label for="weight">Enter Your Weight (kg):</label>
                                <input type="text" id="weight" value={weightValue} onChange={(e) => setWeightValue(e.target.value)}
                                />
                            </div>
                            <input className='Submit' type="submit" name="submit" value="submit" />
                            <input type="reset" name="reset" value="reset" onClick={() => { window.location.reload(); }} />
                            {bmiValue && bmiMessage && (
                                <div className="result">
                                    <p>
                                        Your BMI: <span >{bmiValue}</span>
                                    </p>
                                    <p>
                                        Result: <span>{bmiMessage}</span>
                                    </p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body;
