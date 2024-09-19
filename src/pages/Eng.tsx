import React, { useState, useEffect } from "react";
//@ts-ignore
import TagManager from "react-gtm-module";
import axios from "axios";
import "./styles.scss";

import { scrollTo } from "../utils";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head_bg from "../assets/abc.avif";
import Headline from "../assets/headline_spandeb1.png";

;

export default function Fifth_SP() {

  const SlideUp = cssTransition({
    enter: "toast-enter",
    exit: "toast-exit",
  });
  
 
  
  useEffect(() => {
    window.document.title = "Senior's Allowance Program 2024";

    axios
      .get(process.env.REACT_APP_PROXY + `/visits/8`)
     
  }, []);

  const handleCall = () => {

  };

  const [quiz, setQuiz] = useState("1. Have you been unable to work for at least a year due to a physical/medical condition?");
  const [step, setStep] = useState("process");
  const [min, setMin] = useState(3);
  const [second, setSecond] = useState<any>(0);
  const [yes, setYes] = useState("Yes");
  const [no, setNo] = useState("No");
  const [congrat, setCongrat] = useState(false)
  

  const stepProcess = () => {
    if (step === "Review the answers") {
      setTimeout(() => {
        setStep("Search for available spots");
      }, 1500);
    }
    if (step === "Search for available spots") {
      setTimeout(() => {
        setStep("Eligibility confirmation");
      }, 1500);
    }
    if (step === "Eligibility confirmation") {
      setTimeout(() => {
        setStep("completed");

        
      }, 1500);
    }

    if (step === "completed") {
      const startTime: any = new Date();
      const timer = setInterval(() => {
        const nowTime: any = new Date();
        setSecond((180 - Math.round((nowTime - startTime) / 1000)) % 60);
        setMin(
          Math.floor((180 - Math.round((nowTime - startTime) / 1000)) / 60)
        );
      }, 1000);
    }
  };

  useEffect(() => {
    stepProcess();
  }, [step]);

  const topScroll = (id: any) => {
    scrollTo({ id });
  };

  const handleQuizP = () => {
    topScroll("btn");
    if (quiz === "1. Have you been unable to work for at least a year due to a physical/medical condition?") {
      setYes("Yes")
      setNo("No")
      setQuiz("2. Do you currently have a lawyer or advocate representing you with your claim?");
    } else {
     
      setCongrat(true);
      setStep("Review the answers");
      topScroll("top");
    }
  };
  
  const handleQuizN = () => {
    topScroll("btn");
    if (quiz === "1. Have you been unable to work for at least a year due to a physical/medical condition?") {
      
      setCongrat(true);
      setStep("Review the answers");
      topScroll("top");
    } else {
      
      setStep("Review the answers");
      topScroll("top");
    }
  };
  
  return (
    <div>
      {/* <ToastContainer /> */}
      <div style={{ marginBottom: '4px' }} className="top-sticky-blue-test2" id="top">
      USA Social Security Benefits
      </div>
      {step === "process" ? (
        <>
          <div className="main-container-5">
            <div className="main-descrition-5-5"> 
{/*               <div className="main-des-title-6-7">
                <b>
                Americans Over 50 Can Now Qualify For The $25,000 Burial Coverage Benefit in 2024!
                </b>
              </div> */}


            <div className="main-des-title-6-7">
  <b>
  Americans Are Getting Paid $3,000+ From The Gov. For Not Being Able To Work!
  </b>
</div>


              {/* <img className='topic-img-larger' src = {Headline} alt = "head"/> */}
              <img className="topic-img-middle-z" src={Head_bg} alt="head" />
              <div style={{ marginTop: '14px',marginLeft:'20px' }} className="main-des-5">
                Answer 2 simple questions below to check eligibility
              </div> 
            </div>
            <div style={{ marginTop: '15px' }} className="survey">
              <div className="quiz-5" id="btn">
                {quiz}
              </div>
              <div className="answer">
                <div className="answer-btn-5" onClick={handleQuizP}>
                  {yes}
                </div>
                <div className="answer-btn-5" onClick={handleQuizN}>
                  {no}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : step !== "process" && step !== "completed" ? (
        <div className="checking" style={{ fontWeight: "700" }}>
          {step}
        </div>
      ) : ( 
        congrat === false ? (
          <div className="checking">
            <div className="congrats">Congratulations, You Pre-Qualify! Make A Quick Call To Claim Your Social Security Monthly Payout!</div>
            <div className="top-description-5">
              <b>Call us now</b> to secure your benefit.
            </div>
            <div className="spots-count">Spot Remaining: 4</div>
            <a href="tel:+18337610290">
              <div className="call-btn" onClick={handleCall}>
                CALL (321) 761-0290
              </div>
            </a>
            <div className="sub-description">
              Due to high call volume, your official agent is waiting for only 3 minutes, then your spot will not be reserved.
            </div>
            <div className="timer">
              <div className="timer-cell">{min}</div>
              <div className="timer-cell">:</div>
              <div className="timer-cell">{second}</div>
            </div>
          </div>
        ) : (
          <div className="checking">
            <div className="congrats">Sorry you do not qualify for SSDI Benefits at the moment. Thank you</div>
            {/* <div className="top-description-5">
              <b>Call us now</b> to secure your benefit.
            </div>
            <div className="spots-count">Spot Remaining: 4</div>
            <a href="tel:+13214858035">
              <div className="call-btn" onClick={handleCall}>
                CALL (321) 485-8035
              </div> */}
            {/* </a> */}
            {/* <div className="sub-description">
              Due to high call volume, your official agent is waiting for only 3 minutes, then your spot will not be reserved.
            </div> */}
            {/* <div className="timer">
              <div className="timer-cell">{min}</div>
              <div className="timer-cell">:</div>
              <div className="timer-cell">{second}</div>
            </div> */}
          </div>
        )
      )}
      <div className="footer">
        <div className="terms">Terms & Conditions | Privacy Policy</div>
      </div>
    
     
    </div>
  );
}
