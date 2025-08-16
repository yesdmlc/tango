// scripts/testSupabase.js

import 'dotenv/config' // loads .env.local automatically
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables.')
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
    storage: null,
  },
})

async function testQuery() {
  const { data, error } = await supabase.from('sales').select('*')
  if (error) {
    console.error('Supabase error:', error)
  } else {
    console.log('Sales data:', data)
  }
}

testQuery()