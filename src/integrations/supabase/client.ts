import {createClient} from '@supabase/supabase-js';
import type {Database} from './supabase/types';

const supabaseUrl = "https://wxqvgrmyjntoewjrhskf.supabase.cpostgresql://postgres.wxqvgrmyjntoewjrhskf:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:6543/postgres";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4cXZncm15am50b2V3anJoc2tmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEwOTM1MDYsImV4cCI6MjA0NjY2OTUwNn0.VQtfN0jtgLsZbG9ySVw6RC9hC_xHE4GP5Gm6NrvRJIc";


// imported the supabase client like this:
//import { supabase } from "@/integration/supabase/client";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);