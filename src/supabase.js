import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gmmucdpnezkcarkkmkdx.supabase.co'

const supabaseKey = 'sb_publishable_jjJ5a3NW__zAV-bi8gHPZg_5TxInOyL'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)