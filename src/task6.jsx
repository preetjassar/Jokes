import { useState } from "react";
import "./task6.css";
function Task6() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [notes1, setNotes1] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addNote = () => {
    if (editIndex !== null) {
      const updated = [...notes];
      updated[editIndex] = {
        title: note,
        description: notes1,
      };
      setNotes(updated);
      setEditIndex(null);
    } else {
      setNotes([
        ...notes,
        {
          title: note,
          description: notes1,
        },
      ]);
    }

    setNote("");
    setNotes1("");
  };

  const deleteNote = (index) =>
    setNotes(notes.filter((note, i) => i !== index));

  const editNote = (index) => {
    setNote(notes[index].title);
    setNotes1(notes[index].description);
    setEditIndex(index);
  };


  return (
  <div className=" bg-gray-100 flex justify-center items-center">
    <div className=" bg-white shadow-lg rounded-xl p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        📝 Simple Note App
      </h1>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Enter Title"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Enter Description"
          value={notes1}
          onChange={(e) => setNotes1(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={addNote}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {editIndex !== null ? "Update Note" : "Add Note"}
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {notes.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 border rounded-lg p-4 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {item.title}
            </h3>

            <p className="text-gray-600 mt-1">{item.description}</p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => editNote(index)}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Edit
              </button>

              <button
                onClick={() => deleteNote(index)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);}
export default Task6;