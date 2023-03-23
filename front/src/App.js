import './App.css';
import axios from "axios";
import React,{useState} from "react";

function App() {
    const [dataf, setDataf] = useState([])
    function formSubmit(e){
        e.preventDefault()
        const form = e.target
        const data_by_form = new FormData(form)
        e.target.reset();
        const data_by_form_obj = Object.fromEntries(data_by_form.entries())
        axios.post('/newpost', data_by_form_obj)
            .then(function (response){
                let dd = response.data

                setDataf([...dataf, dd])
                console.log("ответ: " + typeof response.data.name)
            })

    }

  return (
    <div className="App">
      <form onSubmit={formSubmit}>
          <input name={"name"} type={"string"}/>
          <input name={"firstname"} type={"string"}/>
          <input name={"lastname"} type={"string"}/>
          <input name={"age"} type={"number"}/>
          <input name={"data"} type={'date'}/>
          <button type={"submit"}>Отправить</button>
      </form>
        <div className={"div-div"}>
            {dataf.map((i, k)=>
                <ul key={k}>
                    <li>Name: {i.name}</li>
                    <li>Firstname: {i.lastname}</li>
                    <li>Lastname: {i.firstname}</li>
                    <li>Age: {i.age}</li>
                    <li>Data: {i.data}</li>

                </ul>
            )}
        </div>
    </div>
  );
}

export default App;
