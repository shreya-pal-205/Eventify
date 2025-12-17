import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEvent } from "@/api/eventApi";
import { Button } from "@/components/ui/button";
import { geminiModel } from "@/utils/gemini";
import { Sparkles, Loader2 } from "lucide-react";

const CreateEvent = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    dateTime: "",
    location: "",
    capacity: "",
    image: null,
  });

  const [aiLoading, setAiLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  // 🔥 AI DESCRIPTION GENERATOR
  const generateDescription = async () => {
    if (!form.title || !form.location) {
      alert("Please enter event title and location first");
      return;
    }

    setAiLoading(true);

    try {
      const prompt = `
Write a professional, engaging event description.

Event Title: ${form.title}
Location: ${form.location}

Guidelines:
- Tone: professional, welcoming
- Length: 120-150 words
- Mention purpose, audience, and highlights
- Do NOT use emojis
`;

      const result = await geminiModel.generateContent(prompt);
      const text = result.response.text();

      setForm((prev) => ({
        ...prev,
        description: text.trim(),
      }));
    } catch (error) {
      console.error("AI Error:", error);
      alert("Failed to generate description");
    } finally {
      setAiLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("dateTime", form.dateTime);
    formData.append("location", form.location);
    formData.append("capacity", form.capacity);
    if (form.image) formData.append("image", form.image);

    try {
      await createEvent(formData);
      navigate("/events");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#F7F7F7] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl w-full max-w-lg shadow-xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-black">
          Create Event
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* DESCRIPTION + AI BUTTON */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="font-semibold">Description</label>

            <Button
              type="button"
              onClick={generateDescription}
              disabled={aiLoading}
              className="bg-[#FFB22C] text-black flex gap-2"
            >
              {aiLoading ? (
                <Loader2 className="animate-spin" size={16} />
              ) : (
                <Sparkles size={16} />
              )}
              Generate with AI
            </Button>
          </div>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={5}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <input
          type="datetime-local"
          name="dateTime"
          value={form.dateTime}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="number"
          name="capacity"
          placeholder="Capacity"
          value={form.capacity}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        <Button className="w-full bg-indigo-600">
          Create Event
        </Button>
      </form>
    </div>
  );
};

export default CreateEvent;
