import React, { useState } from 'react'
// import FilterBar from './components/filter/FilterBar'
import EmailList from './components/email/EmailList'
import styled from 'styled-components'
import EmailContainer from './components/email/EmailContainer';

const StyledAppLayout = styled.section`
  display: flex;
  /* justify-content: space-evenly; */
  /* position: relative; */
`;

// const 

const StyledAppLayoutUL = styled.ul`
  
`;



export default function AppLayout({data}) {
  const [email, setEmail] = useState([]);
  const [date, setDate] = useState("");
  const [subject, setSubject] = useState();
  const [isOpen, setIsOpen] = useState(false);
  
  const style = {
    width: !isOpen ? "100%" : "auto"
  }
  async function getEmail(id, subject, date, time) {
    setIsOpen(true); 
    const res = await fetch(`https://flipkart-email-mock.vercel.app/?id=${id}#`);
    const data = await res.json();
    setEmail(data);

    setDate(date+" "+time);
    setSubject(subject);
    
  }
    
  return (
    <StyledAppLayout>
      <StyledAppLayoutUL style={style}>
        {data.map((el, i)=> (<EmailList getEmail={getEmail} isOpen={isOpen} key={el.id} id={el.id} emails={el} className={isOpen ? "isOpen" : ""} />))}
      </StyledAppLayoutUL>    
      {
       (isOpen) ?  
        <EmailContainer email={email} date={date} subject={subject} />
        : null
      }
    </StyledAppLayout>
  )
}
