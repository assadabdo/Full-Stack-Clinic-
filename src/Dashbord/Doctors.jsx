import React, { useEffect } from "react";
import { useState } from "react";
import "./dashbord.css";
import { supabase } from "../components/utils/supabase";
import { Skeleton } from "@mui/material";
import { Box } from "@mui/material";

export const Doctors = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  const [doctor_name, setDoctorName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [description, setDescription] = useState("");
  const [working_days, setWorkingDays] = useState([]);
  const [doctorInfo, setDoctorInfo] = useState([]);
  const [id, setId] = useState("");

  // OPEN EDIT
  const openEditModal = (doctor) => {
    setIsEditMode(true);
    setShowModal(true);

    setEditingId(doctor.id);
    setDoctorName(doctor.doctor_name);
    setSpecialization(doctor.specialization);
    setDescription(doctor.description);
    setWorkingDays(doctor.working_days);
  };

  const days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };

  // FETCH
  const FetchDoctors = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("doctor_schedule").select("*");

    if (error) {
      console.log("error", error);
    } else {
      setDoctorInfo(data);
    }
    setLoading(false);
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

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase.from("doctor_schedule").insert({
      doctor_name,
      specialization,
      description,
      working_days,
      id: Date.now(),
      user_id: user.id,
    });

    if (error) console.log("error", error);

    setShowModal(false);
    FetchDoctors();
  };

  // UPDATE
  const handleUpdate = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("doctor_schedule")
      .update({
        doctor_name,
        specialization,
        description,
        working_days,
      })
      .eq("id", editingId);

    if (error) console.log("error", error);

    setShowModal(false);
    FetchDoctors();
  };

  const addDoctor = () => {
    setIsEditMode(false);
    setShowModal(true);
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
        <button className="action-btn refresh-btn" onClick={FetchDoctors}>
          <i className="fa-solid fa-rotate-right"></i>
          Refresh
        </button>
        <button onClick={addDoctor} className="action-btn new-btn">
          <i className="fa-solid fa-plus"></i>
          New
        </button>
      </div>

      <div className="table-container">
        {loading ? (
          <Box sx={{ width: "100%", p: 2 }}>
            {/* Table Header */}
            <Skeleton variant="rectangular" height={50} />

            {/* Table Rows */}
            {[...Array(6)].map((_, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 2,
                  alignItems: "center",
                }}
              >
                <Skeleton variant="text" width="15%" height={40} />
                <Skeleton variant="text" width="15%" height={40} />
                <Skeleton variant="text" width="20%" height={40} />
                <Skeleton variant="text" width="15%" height={40} />
                <Skeleton variant="text" width="10%" height={40} />
                <Skeleton variant="rounded" width={90} height={35} />
              </Box>
            ))}
          </Box>
        ) : (
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
                  <td>
                    {doctor.working_days?.map((day) => days[day]).join(", ")}
                  </td>
                  <td>{doctor.id}</td>
                  <td className="actions-cell">
                    <button
                      className="icon-btn edit-btn"
                      onClick={() => openEditModal(doctor)}
                    >
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
        )}
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>{isEditMode ? "Update Doctor" : "New Doctor"}</h2>

              <button className="close-btn" onClick={() => setShowModal(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <form onSubmit={isEditMode ? handleUpdate : handldoctor}>
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

                <textarea
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

                <button type="submit">
                  {isEditMode ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
