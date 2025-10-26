import React, { useState } from 'react';
import { Reorder, motion } from 'framer-motion';
import { CheckCircle2, Circle, Trash2, Edit3, Save, X } from 'lucide-react';

const TodoItem = ({ item, onToggle, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(item.text);

  const save = () => {
    const v = value.trim();
    if (v) onEdit(item.id, v);
    setEditing(false);
  };

  return (
    <div className="group flex items-center gap-3 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
      <button
        onClick={() => onToggle(item.id)}
        className="shrink-0 rounded-full p-1.5 text-white/70 transition hover:bg-white/10 hover:text-white"
        aria-label={item.done ? 'Mark as undone' : 'Mark as done'}
      >
        {item.done ? <CheckCircle2 size={20} className="text-emerald-400" /> : <Circle size={20} />}
      </button>

      {editing ? (
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') save();
            if (e.key === 'Escape') setEditing(false);
          }}
          autoFocus
          className="flex-1 rounded-md bg-white/5 px-3 py-2 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-fuchsia-500/60"
        />
      ) : (
        <div className="flex-1">
          <p className={`text-sm ${item.done ? 'text-white/40 line-through' : 'text-white'}`}>{item.text}</p>
          <p className="mt-0.5 text-[11px] text-white/40">{new Date(item.createdAt).toLocaleString()}</p>
        </div>
      )}

      <div className="flex items-center gap-1 opacity-0 transition group-hover:opacity-100">
        {editing ? (
          <>
            <button onClick={save} className="rounded-md p-1.5 text-emerald-400 hover:bg-white/10" aria-label="Save">
              <Save size={18} />
            </button>
            <button onClick={() => setEditing(false)} className="rounded-md p-1.5 text-rose-400 hover:bg-white/10" aria-label="Cancel">
              <X size={18} />
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setEditing(true)} className="rounded-md p-1.5 text-indigo-300 hover:bg-white/10" aria-label="Edit">
              <Edit3 size={18} />
            </button>
            <button onClick={() => onDelete(item.id)} className="rounded-md p-1.5 text-rose-400 hover:bg-white/10" aria-label="Delete">
              <Trash2 size={18} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const TodoList = ({ items, setItems, onToggle, onDelete, onEdit }) => {
  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems} className="space-y-3">
      {items.map((item) => (
        <Reorder.Item
          key={item.id}
          value={item}
          as={motion.div}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          whileDrag={{ scale: 1.02 }}
          className="cursor-grab active:cursor-grabbing"
          layout
        >
          <TodoItem item={item} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default TodoList;
