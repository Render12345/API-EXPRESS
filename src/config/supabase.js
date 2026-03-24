const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = 'https://kcrrxwgehuukkwshyypp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjcnJ4d2dlaHV1a2t3c2h5eXBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwMzA0OTcsImV4cCI6MjA4OTYwNjQ5N30.FzqUbd4cOltKzva1jZN8N0S5ajkq52KprKPoIau7DY8';
const supabase = createClient(supabaseUrl, supabaseKey);
module.exports = supabase;