import React from "react";
import "./dashbord.css";
import { supabase } from "../components/utils/supabase";
import { useState } from "react";
import { useEffect } from "react";

export const Messages = () => {
  const [messages, setMessages] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const FetchMessages = async () => {
    const { data, error } = await supabase.from("Messages").select("*");

    if (error) {
      console.log("error", error);
    } else {
      setMessages(data);
    }
  };

  // OPEN EDIT
  const openEditModal = (message) => {
    setIsEditMode(true);
    setShowModal(true);

    setEditingId(message.id);
    setName(message.name);
    setEmail(doctor.email);
    setMessage(doctor.message);
  };

  // DELETE
  const handleDelet = async (id) => {
    const { error } = await supabase.from("Messages").delete().eq("id", id);
    if (error) console.log("error deletng a message", error);
    FetchMessages();
  };

  // UPDATE
  const handleUpdate = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("Messages")
      .update({
        name,
        email,
        message,
      })
      .eq("id", editingId);

    if (error) console.log("error", error);

    setShowModal(false);
    FetchMessages();
  };

  // CREATE
  const handlMessage = async (e) => {
    e.preventDefault();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { error } = await supabase.from("Messages").insert({
      name,
      email,
      message,
      id: Date.now(),
      user_id: user.id,
    });

    if (error) console.log("error", error);

    setShowModal(false);
    FetchMessages();
  };

  const addMessage = () => {
    setIsEditMode(false);
    setShowModal(true);
  };

  useEffect(() => {
    FetchMessages();
  }, []);

  return (
    <div className="feed-container">
      <div className="feed-header">
        <h1 className="feed-title">Messages</h1>
        <span className="feed-count">{messages.length} records</span>
      </div>

      <div className="feed-actions">
        <button className="action-btn refresh-btn" onClick={FetchMessages()}>
          <i className="fa-solid fa-rotate-right"></i>
          Refresh
        </button>
        <button className="action-btn new-btn" onClick={addMessage}>
          <i className="fa-solid fa-plus"></i>
          New
        </button>
      </div>

      <div className="table-container">
        <table className="messages-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id}>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.message}</td>
                <td className="actions-cell">
                  <button
                    className="icon-btn edit-btn"
                    onClick={() => openEditModal(msg)}
                  >
                    <i className="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    className="icon-btn delete-btn"
                    onClick={() => handleDelet(msg.id)}
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
              <h2>{isEditMode ? "Update Message" : "New Message"}</h2>

              <button className="close-btn" onClick={() => setShowModal(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <form onSubmit={isEditMode ? handleUpdate : handlMessage}>
              <div className="modal-body">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                />

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                />

                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  placeholder="Message"
                />
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
