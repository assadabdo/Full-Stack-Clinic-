import React, { useEffect } from "react";
import { useState } from "react";
import "./dashbord.css";
import { supabase } from "../components/utils/supabase";

export const Doctors = () => {
  const [showModal, setShowModal] = useState(false);

  const [doctor_name, setDoctorName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [description, setDescription] = useState("");
  const [working_days, setWorkingDays] = useState([]);
  const [doctorInfo, setDoctorInfo] = useState([]);
  const [id, setId] = useState("");

  // FETCH
  const FetchDoctors = async () => {
    const { data, error } = await supabase.from("doctor_schedule").select("*");

    if (error) {
      console.log("error", error);
    } else {
      setDoctorInfo(data);
    }
  };

  // DELETE
  const handleDelet = async (id) => {
    const { error } = await supabase
      .from("doctor_schedule")
      .delete()
      .eq("id", id);
    if (error) console.log("error", error);
    FetchDoctors();
  };

  // CREATE
  const handldoctor = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("doctor_schedule").insert({
      doctor_name,
      specialization,
      description,
      working_days,
      id: Date.now(),
    });

    if (error) console.log("error", error);

    setShowModal(false);
    FetchDoctors();
  };

  useEffect(() => {
    FetchDoctors();
  }, []);

  return (
    <div className="feed-container">
      <div className="feed-header">
        <h1 className="feed-title">Doctors</h1>
        <span className="feed-count">{doctorInfo.length} records</span>
      </div>

      <div className="feed-actions">
        <button className="action-btn refresh-btn">
          <i className="fa-solid fa-rotate-right"></i>
          Refresh
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="action-btn new-btn"
        >
          <i className="fa-solid fa-plus"></i>
          New
        </button>
      </div>

      <div className="table-container">
        <table className="messages-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Specialty</th>
              <th>description</th>
              <th>working-Days</th>
              <th>Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctorInfo.map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.doctor_name}</td>
                <td>{doctor.specialization}</td>
                <td>{doctor.description}</td>
                <td>{doctor.working_days}</td>
                <td>{doctor.id}</td>
                <td className="actions-cell">
                  <button className="icon-btn edit-btn">
                    <i className="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    className="icon-btn delete-btn"
                    onClick={() => handleDelet(doctor.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>New Doctor</h2>

              <button className="close-btn" onClick={() => setShowModal(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <form onSubmit={handldoctor}>
              <div className="modal-body">
                <input
                  value={doctor_name}
                  onChange={(e) => setDoctorName(e.target.value)}
                  type="text"
                  placeholder="Doctor Name"
                />

                <input
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  type="text"
                  placeholder="Specialization"
                />

                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  placeholder="description"
                />

                <input
                  value={working_days}
                  onChange={(e) => setWorkingDays(e.target.value)}
                  type="text"
                  placeholder="working Days"
                />

                {/* <input value={id} onChange={(e) => setId(e.target.value)} type="text" placeholder="doctor id" /> */}
              </div>

              <div className="modal-footer">
                <button onClick={() => setShowModal(false)}>Cancel</button>

                <button type="submit">Create</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
