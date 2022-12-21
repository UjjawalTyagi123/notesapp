import React from 'react';
import { useState } from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import NotesList from './components/NotesList';
import {Note} from "./models/node_models"
import CreateNotes from './components/CreateNotes';
function App() {
  const [notes,setNotes]=useState<Note[]>([{
id:(new Date()).toString(),
title:"Meetings",
text:"SChedule meeting with UI/Ux team",
color:"#dfdfdf",
date:(new Date()).toString()
  }])

  return (
    <>
     <Header/>
     <Container className='mt-5'>
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>

        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
     </Container>
    </>
   
  )
}

export default App;
