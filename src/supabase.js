import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hioxmmhivrrkiitjsbvf.supabase.co'
const supabaseKey = 'sb_publishable_7S8ZuDtURUWBFZDHr_gEYg_IgILnTGM'

export const supabase = createClient(supabaseUrl, supabaseKey)
