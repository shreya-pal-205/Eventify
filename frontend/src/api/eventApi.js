import axios from "axios";

// Base URL of your backend
const API_URL = "http://localhost:5000/api/events";

// Helper to get auth header
const getAuthHeader = () => ({
  headers: {
    Authorization: `${localStorage.getItem("token")}`,
  },
});

// Get all events
export const getEvents = () => {
  return axios.get(API_URL, getAuthHeader());
};

// Get single event by ID
export const getEventById = (id) => {
  return axios.get(`${API_URL}/${id}`, getAuthHeader());
};

// Create new event 
export const createEvent = (formData) => {
  return axios.post(API_URL, formData, {
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "multipart/form-data",
    },
  });
};

// Update event by ID 
export const updateEvent = (id, formData) => {
  return axios.put(`${API_URL}/${id}`, formData, {
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "multipart/form-data",
    },
  });
};

// Delete event
export const deleteEvent = (id) => {
  return axios.delete(`${API_URL}/${id}`, getAuthHeader());
};



// Join Event
export const joinEvent = (id) => {
  return axios.post(
    `${API_URL}/${id}/rsvp`,
    {},
    {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    }
  );
};

// Leave Event
export const leaveEvent = (id) => {
  return axios.post(
    `${API_URL}/${id}/leave`,
    {},
    {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    }
  );
};
