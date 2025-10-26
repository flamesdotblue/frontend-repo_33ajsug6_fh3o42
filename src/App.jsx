import React, { useEffect, useMemo, useState } from 'react';
import Hero3D from './components/Hero3D';
import TodoComposer from './components/TodoComposer';
import TodoList from './components/TodoList';
import StatsPanel from './components/StatsPanel';

function App() {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem('futuristic_todos');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('futuristic_todos', JSON.stringify(items));
  }, [items]);

  const addItem = (text) => {
    const newItem = { id: crypto.randomUUID(), text, done: false, createdAt: Date.now() };
    setItems((prev) => [newItem, ...prev]);
  };

  const toggleItem = (id) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, done: !i.done } : i)));
  };

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const editItem = (id, text) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, text } : i)));
  };

  const sortedItems = useMemo(() => {
    // Keep user-determined order, but visually group: incomplete first, then completed
    const incomplete = items.filter((i) => !i.done);
    const completed = items.filter((i) => i.done);
    return [...incomplete, ...completed];
  }, [items]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B10] via-[#0B0B10] to-[#0E0A18] text-white">
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
        <Hero3D />

        <section id="tasks" className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">Your Tasks</h2>
            <TodoComposer onAdd={addItem} />
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur">
              {sortedItems.length === 0 ? (
                <div className="flex h-32 flex-col items-center justify-center text-center text-white/60">
                  <p>No tasks yet. Create your first mission above.</p>
                </div>
              ) : (
                <TodoList
                  items={sortedItems}
                  setItems={setItems}
                  onToggle={toggleItem}
                  onDelete={deleteItem}
                  onEdit={editItem}
                />
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">Overview</h2>
            <StatsPanel items={items} />
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <h3 className="text-sm font-semibold text-white/80">Tips</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/60">
                <li>Drag tasks to reorder them.</li>
                <li>Press Enter to save edits. Esc to cancel.</li>
                <li>Your tasks are saved locally on this device.</li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="pb-10 pt-6 text-center text-xs text-white/50">
          Built for the future. Make it yours.
        </footer>
      </div>
    </div>
  );
}

export default App;
