export type DateRange = { start: Date; end: Date };

export function getRangeBounds(rangeKey: string): DateRange {
  const now = new Date();
  const start = new Date(now);
  const end = new Date(now);

  switch (rangeKey) {
    case 'this_week': {
      const day = now.getDay();
      start.setDate(now.getDate() - day);
      end.setDate(start.getDate() + 6);
      break;
    }
    case 'today':
      // start and end are both today
      break;
    case 'last_week': {
      const lastWeekStart = new Date(now);
      lastWeekStart.setDate(now.getDate() - now.getDay() - 7);
      start.setTime(lastWeekStart.getTime());
      end.setDate(start.getDate() + 6);
      break;
    }
    case 'this_month': {
      const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
      const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      start.setTime(monthStart.getTime());
      end.setTime(monthEnd.getTime());
      break;
    }
    default:
      throw new Error(`Unknown rangeKey: ${rangeKey}`);
  }

  return { start, end };
}

