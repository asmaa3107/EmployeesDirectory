import React from 'react';


const CreateNew = () => {

  const handleCreateProduct = () =>{}
  return (
    <div>
      <div>
        <div className="card white_card" id="fetchData">
          <div className="card-header">
            <div>
              <h5 className="card-title">Add new Employee</h5>
            </div>
            <div>
            </div>
          </div>
          <div className="card-body">
            <div id="container">
              <div className="underline">
              </div>
            
              <form onSubmit={() => handleCreateProduct()} method="post" id="contact_htmlform">
                <div className="name">
                  <label htmlFor="name"></label>
                  <input type="text" placeholder="name is" name="name" id="name_input" required />
                </div>
                <div className="email">
                  <label htmlFor="email"></label>
                  <input type="email" placeholder="e-mail is" name="email" id="email_input" required />
                </div>
                <div className="telephone">
                  <label htmlFor="telephone"></label>
                  <input type="text" placeholder="number is" name="telephone" id="telephone_input" required />
                </div>
                <div className="dateOfBirth">
                  <label htmlFor="name" className='formlable'>Date of Birth</label>
                  <input type="date" placeholder="date is " name="dateOfBirth" id="dateOfBirth_input" required />
                </div>
                
                <div className="subject">
                  <label htmlFor="subject"></label>
                <select placeholder="select department" name="subject" id="subject_input" required >
                  <option disabled hidden selected>Department </option>
                  <option>HR</option>
                  <option>Software</option>
                  <option>Opertion</option>
                </select>
                </div>
                <div className="message">
                <label htmlFor="jobtitle"></label>
                  <input type="text" placeholder="job title is" name="jobtitle" id="jobtitle_input" required />
                </div>
                 <div className="submit">
                    {/*  */}
                <input type="submit" value="+ Create " id="htmlForm_button" />
                </div>
              </form>
            </div>
          </div>
          </div>
          </div>
          </div>
  );
};

export default CreateNew;

// {
//   "_id": "BEuDBdKeZXlTBVd",
//   "empName": "Bert Ziemann",
//   "email": "Alfred38@gmail.com",
//   "phone": "1-659-367-8143",
//   "avatar": "https://loremflickr.com/640/480?lock=3183354937606144",
//   "dateStart": "Thu Sep 28 2023 13:05:18 GMT+0300 (Eastern European Summer Time)",
//   "dateOfBirth": "Wed Aug 14 2024 07:47:41 GMT+0300 (Eastern European Summer Time)",
//   "jobTitle": "Forward Applications Technician",
//   "department": "Games",
//   "salary": "84063.62"
// },