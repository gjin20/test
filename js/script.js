{\rtf1\ansi\ansicpg1252\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById('signupForm').addEventListener('submit', async function(event) \{\
  event.preventDefault();\
\
  const email = document.getElementById('email').value;\
\
  // Simulated email uniqueness check\
  const existingEmails = ['test@example.com', 'user@domain.com']; // Example existing emails\
  if (existingEmails.includes(email)) \{\
    const errorMessage = document.getElementById('errorMessage');\
    errorMessage.textContent = 'This email address is already registered.';\
    errorMessage.style.display = 'block';\
    return;\
  \}\
\
  alert('Sign-up successful!');\
  // Here you can add logic to send form data to the server\
\});}