import React from 'react'
import Body from '../components/Body'
import Header from '../components/Header'

const Homepage = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://media.istockphoto.com/id/808424876/photo/password-input-field-with-padlock.jpg?s=612x612&w=0&k=20&c=vvaVPgT61fbRU_YXCgPr_EaaleWOJid5gBQ65-Jrcg4=")',
        backgroundSize: "cover",
      }}
    >
      <Header />
      <Body />
    </div>
  );
}

export default Homepage