import React, {useState } from 'react'

function Form() {
    const[data, setData] = useState({
        FirstName: '',
        LastName: '',
        email: '',
        district: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', data);
        alert('Registration successful');

        setData({
            FirstName: '',
            LastName: '',
            email: '',
            district: '',
          });
      };


      

      const isFormValid = data.FirstName && data.LastName && data.email && data.district;


  return (
    <div className='form rounded-xl m-5'>
        <form onSubmit={handleSubmit}>
        <input type="text"
        name='FirstName'
        placeholder='First name'
        value={data.FirstName}
        onChange={handleChange}
        className='border border-black m-5 p-3 w-72'
        required
        />

        <input type="text"
        name='LastName'
        placeholder='Last name'
        value={data.LastName}
        onChange={handleChange}
        className='border border-black m-5 p-3 w-72 '
        required
        />

        <input type='email'
        name='email'
        placeholder='exapmle@gmai.com'
        value={data.email}
        onChange={handleChange}
        className='border border-black m-5 p-3 w-72 '
        required
        />
        <select 
        name="district" 
        id="district" 
        value={data.district}
        onChange={handleChange}
        className="w-48 p-2">
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


        <button type='submit' disabled={!isFormValid} className='bg-teal-500 rounded-lg text-white w-48 m-5 p-2 hover:bg-white hover:text-black'>Register</button>

        </form>

    </div>
  )
}

export default Form;