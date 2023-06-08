import React, { Component } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Notfound() {
  const navigate = useNavigate()
    useEffect(() =>{
      if(localStorage.length!==0){
        navigate("/Shop");
        window.location.reload(true);
      }
      else{
        navigate("/");
        window.location.reload(true);
      }
    }, [])
    return (
      <div>
      </div>
    )
  }
