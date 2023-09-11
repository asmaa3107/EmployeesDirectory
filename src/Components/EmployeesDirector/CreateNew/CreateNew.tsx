import React from "react";
import { emp_type } from "../../../utils/employee";
import { useForm } from "react-hook-form";
import { createNewEmp } from "../../../utils/services";
import generateRandomId from "../../../utils/generatePassword";

const CreateNew = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<emp_type>();
  const handleCreateEmployee = (data: emp_type) => {
    const randomId = generateRandomId(15);

    const finalObj : emp_type = {
      ...data,
      id: randomId,
      salary:'5555',
      dateStart: Date.now().toString()
    };

    createNewEmp(finalObj);
    alert('new employee added !!')
  };
  return (
    <div>
      <div>
        <div className="card white_card" id="fetchData">
          <div className="card-header">
            <div>
              <h5 className="card-title">Add new Employee</h5>
            </div>
            <div></div>
          </div>
          <div className="card-body">
            <div id="container">
              <div className="underline"></div>

              <form
                onSubmit={handleSubmit(handleCreateEmployee)}
                id="contact_htmlform"
              >
                <div className="name">
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    placeholder="name is"
                    id="empName"
                    {...register("empName", { required: true })}
                  />
                </div>
                <div className="email">
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    placeholder="e-mail is"
                    id="email"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="telephone">
                  <label htmlFor="telephone"></label>
                  <input
                    type="text"
                    placeholder="number is"
                    id="phone"
                    {...register("phone", { required: true })}
                  />
                </div>
                <div className="dateOfBirth">
                  <label htmlFor="name" className="formlable">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    placeholder="date is "
                    id="dateOfBirth"
                    {...register("dateOfBirth", { required: true })}
                  />
                </div>

                <div className="subject">
                  <label htmlFor="subject"></label>
                  <select
                    placeholder="select department"
                    id="department"
                    {...register("department", { required: true })}
                  >
                    <option disabled hidden defaultValue="Department">
                      Department{" "}
                    </option>
                    <option>HR</option>
                    <option>Software</option>
                    <option>Opertion</option>
                  </select>
                </div>
                <div className="message">
                  <label htmlFor="jobtitle"></label>
                  <input
                    type="text"
                    placeholder="job title is"
                    id="jobTitle"
                    {...register("jobTitle", { required: true })}
                  />
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
