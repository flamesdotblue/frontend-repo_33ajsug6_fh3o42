import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const TodoComposer = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    onAdd(value);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur">
      <div className="flex items-center gap-3">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task…"
          className="flex-1 rounded-xl border-0 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-fuchsia-500/60"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-fuchsia-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-600/30 transition hover:bg-fuchsia-500"
          aria-label="Add task"
        >
          <Plus size={18} />
          <span className="hidden sm:inline">Add</span>
        </button>
      </div>
    </form>
  );
};

export default TodoComposer;
