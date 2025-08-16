import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://your-project.supabase.co',
  'your-public-anon-key'
);

async function fetchSales() {
  const { data, error } = await supabase
    .from('sales')
    .select('*')
    .order('date', { ascending: false });

  if (error) {
    console.error('Error fetching sales:', error);
    return [];
  }

  return data;
}

function renderSales(sales) {
  const tbody = document.getElementById('sales-body');
  tbody.innerHTML = sales.map(sale => `
    <tr>
      <td>${new Date(sale.date).toLocaleDateString()}</td>
      <td>${sale.amount.toFixed(2)}</td>
      <td>${sale.orders}</td>
    </tr>
  `).join('');
}

async function loadDashboard() {
  const sales = await fetchSales();
  renderSales(sales);
}

loadDashboard(); // Initial load

// 🔄 Real-time updates
supabase
  .channel('sales-updates')
  .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'sales' }, async payload => {
    console.log('New sale added:', payload.new);
    await loadDashboard(); // Refresh the table
  })
  .subscribe();