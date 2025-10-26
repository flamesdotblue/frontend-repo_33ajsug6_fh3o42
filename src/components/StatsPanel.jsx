import React from 'react';

const Stat = ({ label, value, accent }) => (
  <div className="flex flex-col rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
    <div className={`text-xs font-medium ${accent}`}>{label}</div>
    <div className="mt-1 text-2xl font-bold text-white">{value}</div>
  </div>
);

const StatsPanel = ({ items }) => {
  const total = items.length;
  const done = items.filter((t) => t.done).length;
  const remaining = total - done;

  return (
    <div id="overview" className="grid grid-cols-3 gap-3">
      <Stat label="Total" value={total} accent="text-white/60" />
      <Stat label="Completed" value={done} accent="text-emerald-400" />
      <Stat label="Remaining" value={remaining} accent="text-fuchsia-400" />
    </div>
  );
};

export default StatsPanel;
