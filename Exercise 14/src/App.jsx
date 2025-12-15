import { useReducer,useState } from "react";

const initialState = {
  step:1,
  firstName:'',
  lastName:'',
  email:'',
  phone:'',
};

const reducer =(state,action)=>{
  switch(action.type){
    case'next':
      return {...state,step:state.step+1};
    case 'back':
      return {...state,step:state.step-1};
    case 'update':
      return {...state,[action.input] : action.value};
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const App =()=>{

  const [state, dispatch] = useReducer(reducer, initialState); 
  const handleNext =()=> dispatch({type:'next'})
  const handleBack =()=> dispatch({type:'back'})
  const handleReset = () => dispatch({ type: 'reset'})

  const handleSubmit = () => {
    
    alert('Form submitted successfully!');
    handleReset();
  };

  const handleChange=(e)=>{
    dispatch({
      type: 'update',
      input: e.target.name,
      value: e.target.value,
    })
  }
  return (
    <div>
      <h1>Multipage Form</h1>

      {state.step ===1 &&(
        <>
        <h1>Step 1:Profile</h1>
        <label >First Name:
          <input type="text" 
          name="firstName" 
          required
          value={state.firstName} 
          onChange={handleChange}
          />
        </label>
        <br/>
        <label >LastName:
          <input type="text" 
          name="lastName" 
          value={state.lastName} 
          onChange={handleChange}
          />
        </label>
        <br/>
        <button onClick={handleNext}>Next</button>
        </>
      )}
      {state.step ===2 &&(
        <>
        <h1>Step 2:Contact</h1>
        <label >Email:
          <input type="email" 
          name="email" 
          value={state.email} 
          onChange={handleChange}
          />
        </label>
        <br/>
        <label >Phone:
          <input type="tel" 
          name="phone" 
          value={state.phone} 
          onChange={handleChange}
          />
        </label>
        <br/>
        <button onClick={handleBack}>Back</button><button onClick={handleNext}>Next</button>
        </>
      )}
      {state.step === 3 && (
        <div>
          <h3>Step 3: Review</h3>
          <p>
            <strong>First Name:</strong> {state.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {state.lastName}
          </p>
          <p>
            <strong>Email:</strong> {state.email}
          </p>
          <p>
            <strong>Phone:</strong> {state.phone}
          </p>
          <button onClick={handleBack}>Back</button>
          <button onClick={handleSubmit}>Confirm</button>
        </div>
      )}
      {state.step > 3 && (
        <div>
          <h3>Form Completed</h3>
          <button onClick={handleReset}>Start Over</button>
        </div>
      )}

    </div>
  )
}

export default App ;