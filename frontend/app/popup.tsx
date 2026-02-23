"use client";

export default function Popup() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Popup Title</h2>
        <p className="mb-4">This is a popup component. You can customize its content.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Close</button>
      </div>
    </div>
  );
}
