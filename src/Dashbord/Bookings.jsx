import React, { useState, useEffect } from "react";
import "./dashbord.css";
import { supabase } from "../components/utils/supabase";
import { Skeleton } from "@mui/material";
import { Box } from "@mui/material";

export const Bookings = () => {
  const [Bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [filterDate, setFilterDate] = useState("");

  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [patient_name, setPatientName] = useState("");
  const [doctor_name, setDoctorName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  // Filtering
  const filteredBookings = filterDate
    ? Bookings.filter((b) => b.date === filterDate)
    : Bookings;

  // FETCH
  const FetchDoctors = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("Booking").select("*");

    if (error) {
      console.log("error", error);
    } else {
      setBookings(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    FetchDoctors();
  }, []);

  // CREATE
  const handleBook = async (e) => {
    e.preventDefault();

    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { error } = await supabase.from("Booking").insert({
      patient_name,
      doctor_name,
      phone_number,
      date,
      notes,
      user_id: user.id,
    });

    if (error) console.log("error", error);

    closeModal();
    FetchDoctors();
  };

  // UPDATE
  const handleUpdate = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("Booking")
      .update({
        patient_name,
        doctor_name,
        phone_number,
        date,
        notes,
      })
      .eq("id", editingId);

    if (error) console.log("error", error);

    closeModal();
    FetchDoctors();
  };

  // DELETE
  const handleDelet = async (id) => {
    const { error } = await supabase.from("Booking").delete().eq("id", id);

    if (error) console.log("error", error);

    FetchDoctors();
  };

  // OPEN CREATE
  const addBooking = () => {
    resetForm();
    setIsEditMode(false);
    setShowModal(true);
  };

  // OPEN EDIT
  const openEditModal = (booking) => {
    setIsEditMode(true);
    setShowModal(true);

    setEditingId(booking.id);
    setPatientName(booking.patient_name);
    setDoctorName(booking.doctor_name);
    setPhoneNumber(booking.phone_number);
    setDate(booking.date);
    setNotes(booking.notes);
  };

  // CLOSE MODAL
  const closeModal = () => {
    setShowModal(false);
    setIsEditMode(false);
    setEditingId(null);
    resetForm();
  };

  // RESET FORM
  const resetForm = () => {
    setPatientName("");
    setDoctorName("");
    setPhoneNumber("");
    setDate("");
    setNotes("");
  };

  return (
    <div className="feed-container">
      <div className="feed-header">
        <h1 className="feed-title">Bookings</h1>
        <span className="feed-count">{Bookings.length} records</span>
      </div>

      <div className="feed-actions">
        <div style={{ display: "flex", gap: "8px" }}>
          {" "}
          <button className="action-btn refresh-btn" onClick={FetchDoctors}>
            <i className="fa-solid fa-rotate-right"></i>
            Refresh
          </button>
          <button onClick={addBooking} className="action-btn new-btn">
            <i className="fa-solid fa-plus"></i>
            New
          </button>
        </div>
        <div className="filterDate">
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
          <button onClick={() => setFilterDate("")}>Clear Filter</button>
        </div>
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
                <Skeleton variant="text" width="15%" height={40} />
                <Skeleton variant="text" width="15%" height={40} />
                <Skeleton variant="text" width="20%" height={40} />
                <Skeleton variant="rounded" width={90} height={35} />
              </Box>
            ))}
          </Box>
        ) : (
          <table className="messages-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Doctor</th>
                <th>Phone</th>
                <th>Notes</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.patient_name}</td>
                  <td>{booking.date}</td>
                  <td>{booking.doctor_name}</td>
                  <td>{booking.phone_number}</td>
                  <td>{booking.notes}</td>

                  <td className="actions-cell">
                    <button
                      onClick={() => openEditModal(booking)}
                      className="icon-btn edit-btn"
                    >
                      <i className="fa-solid fa-pencil"></i>
                    </button>

                    <button
                      onClick={() => handleDelet(booking.id)}
                      className="icon-btn delete-btn"
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

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>{isEditMode ? "Update Booking" : "New Booking"}</h2>

              <button className="close-btn" onClick={closeModal}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <form onSubmit={isEditMode ? handleUpdate : handleBook}>
              <div className="modal-body">
                <input
                  value={patient_name}
                  onChange={(e) => setPatientName(e.target.value)}
                  type="text"
                  placeholder="Patient Name"
                />

                <input
                  value={doctor_name}
                  onChange={(e) => setDoctorName(e.target.value)}
                  type="text"
                  placeholder="Doctor Name"
                />

                <input
                  value={phone_number}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="text"
                  placeholder="Phone Number"
                />

                <input
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  type="text"
                  placeholder="Notes"
                />

                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                />
              </div>

              <div className="modal-footer">
                <button type="button" onClick={closeModal}>
                  Cancel
                </button>

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
