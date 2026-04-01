import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nbwgavnygpemeloznuqo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5id2dhdm55Z3BlbWVsb3pudXFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwMTc1ODQsImV4cCI6MjA5MDU5MzU4NH0.toJ9Z-_2t2csJEJ7QTp7ljcI6WFumONAUB3HoRi9zDc'

export const supabase = createClient(supabaseUrl, supabaseKey)
```

**Commit message:**
```
Add Supabase connection
