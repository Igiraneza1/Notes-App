import React, { useEffect, useState } from 'react'

function Form() {
    // const[name, setName] = useState('')
    // useEffect(() => {
    //     alert('Registration successful')
    // })
  return (
    <div className='form rounded-xl m-5'>
        <input type="text"
        placeholder='First name'
        className='border border-black m-5 p-3 w-72'
        />

        <input type="text"
        placeholder='Last name'
        className='border border-black m-5 p-3 w-72 '
        />

        <input type='email'
        placeholder='exapmle@gmai.com'
        className='border border-black m-5 p-3 w-72 '
        />
        <select name="district" id="district" className="w-48 p-2">
            <option value="Bugesera">Bugesera</option>
            <option value="Burera">Burera</option>
            <option value="Gakenke">Gakenke</option>
            <option value="Gasabo">Gasabo</option>
            <option value="Gatsibo">Gatsibo</option>
            <option value="Gicumbi">Gicumbi</option>
            <option value="Gisagara">Gisagara</option>
            <option value="Huye">Huye</option>
            <option value="Kamonyi">Kamonyi</option>
            <option value="Karongi">Karongi</option>
            <option value="Kayonza">Kayonza</option>
            <option value="Kicukiro">Kicukiro</option>
            <option value="Kirehe">Kirehe</option>
            <option value="Muhanga">Muhanga</option>
            <option value="Musanze">Musanze</option>
            <option value="Ngoma">Ngoma</option>
            <option value="Ngororero">Ngororero</option>
            <option value="Nyabihu">Nyabihu</option>
            <option value="Nyagatare">Nyagatare</option>
            <option value="Nyamagabe">Nyamagabe</option>
            <option value="Nyamasheke">Nyamasheke</option>
            <option value="Nyanza">Nyanza</option>
            <option value="Nyarugenge">Nyarugenge</option>
            <option value="Nyaruguru">Nyaruguru</option>
            <option value="Rubavu">Rubavu</option>
            <option value="Ruhango">Ruhango</option>
            <option value="Rulindo">Rulindo</option>
            <option value="Rusizi">Rusizi</option>
            <option value="Rutsiro">Rutsiro</option>
            <option value="Rwamagana">Rwamagana</option>
        </select>


        <button className='bg-teal-500 rounded-lg text-white w-48 m-5 p-2 hover:bg-white hover:text-black'>Register</button>


    </div>
  )
}

export default Form;