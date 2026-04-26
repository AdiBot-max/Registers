import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// 🔥 REPLACE THESE
const supabaseUrl = "https://lfnlgxeavfxpngdlaipn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmbmxneGVhdmZ4cG5nZGxhaXBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyMjAzODUsImV4cCI6MjA5Mjc5NjM4NX0.c1NI2KnjnYVqsITU3nXbFg4ydOJk5-b2WYR2ZcpWLLg";

const supabase = createClient(supabaseUrl, supabaseKey);

const status = document.getElementById("status");

window.register = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signUp({
    email,
    password
  });

  status.innerText = error ? error.message : "Registered!";
};

window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  status.innerText = error ? error.message : "Logged in!";
};
