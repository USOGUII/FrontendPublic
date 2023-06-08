import React, { useState } from 'react'
import axios from "axios";
import { redirect } from 'react-router-dom'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Userprofile() {
        const navigate = useNavigate();
     return(
         <div className='registration'>
         <header>
          <span className='logoREG'>exeBooks</span>
        </header>
         </div>
     );
}