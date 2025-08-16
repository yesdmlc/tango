export function groupEntriesByDate(entries: { created_at: string }[]) {
  const counts: Record<string, number> = {};

  entries.forEach((entry) => {
    const date = new Date(entry.created_at).toISOString().split('T')[0]; // YYYY-MM-DD
    counts[date] = (counts[date] || 0) + 1;
  });

  // Convert to array sorted by date
  return Object.entries(counts)
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}