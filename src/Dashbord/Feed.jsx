import React, { useEffect, useState } from "react";
import { supabase } from "../components/utils/supabase";
import "./dashbord.css";

export const Feed = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching messages:", error);
    } else {
      setMessages(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    const { error } = await supabase.from("messages").delete().eq("id", id);
    if (error) {
      console.error("Error deleting message:", error);
    } else {
      fetchMessages();
    }
  };

  return (
    <div className="feed-container">
      <div className="feed-header">
        <h1 className="feed-title">Messages</h1>
        <span className="feed-count">{messages.length} records</span>
      </div>

      <div className="feed-actions">
        <button className="action-btn refresh-btn" onClick={fetchMessages}>
          <i className="fa-solid fa-rotate-right"></i>
          Refresh
        </button>
        <button className="action-btn new-btn">
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
            {loading ? (
              <tr>
                <td colSpan="4">Loading...</td>
              </tr>
            ) : messages.length === 0 ? (
              <tr>
                <td colSpan="4">No messages found</td>
              </tr>
            ) : (
              messages.map((msg) => (
                <tr key={msg.id}>
                  <td>{msg.name}</td>
                  <td>{msg.email}</td>
                  <td>{msg.message}</td>
                  <td className="actions-cell">
                    <button className="icon-btn edit-btn">
                      <i className="fa-solid fa-pencil"></i>
                    </button>
                    <button
                      className="icon-btn delete-btn"
                      onClick={() => handleDelete(msg.id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
