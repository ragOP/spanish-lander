import React, { useState, useEffect } from "react";
//@ts-ignore
import TagManager from "react-gtm-module";
import axios from "axios";
import "./styles.scss";

import { scrollTo } from "../utils";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head_bg from "../assets/share.png";
import Headline from "../assets/headline_spandeb1.png";

// google tag manager

const tagManagerArgs = {
  gtmId: "GTM-KZJBC3B",
};

TagManager.initialize(tagManagerArgs);

export default function Fifth_SP() {
  useEffect(() => {
    window.document.title = "Senior's Allowance Program 2024";

    axios.get(process.env.REACT_APP_PROXY + `/visits/8`);
  }, []);

  const handleCall = () => {};

  const [quiz, setQuiz] = useState("Are you over 50?");
  const [step, setStep] = useState("process");
  const [min, setMin] = useState(3);
  const [second, setSecond] = useState<any>(0);
  const [yes, setYes] = useState("Yes");
  const [no, setNo] = useState("No");
  const [count, setCount] = useState("");
  const [text, setText] = useState("");
  const [question,setQuestion]=useState("")

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
    if (quiz === "Are you over 50?") {
      setYes("Yes");
      setNo("No");
      setQuiz("Do You Live in the USA?");
      setCount("Family member");
      setText("Other");
    } else {
      setStep("Review the answers");

      topScroll("top");
    }
  };

  const handleQuizN = () => {
    topScroll("btn");
    if (quiz === "Are you over the age of 60?  ") {
      setYes("Yes");
      setNo("No");
      setQuiz("Do You Live in the USA?");
    } else {
      setStep("Review the answers");

      topScroll("top");
    }
  };

  return (
    <div>
      {/* <ToastContainer /> */}
      <div
        style={{ marginBottom: "4px" }}
        className="top-sticky-blue-test2"
        id="top"
      >
        Senior's Allowance Program 2024
      </div>
      {step === "process" ? (
        <>
          <div className="main-container-5">
            <div className="main-descrition-5-5">
              <div className="main-des-title-6-7">
                <b>
                  Are You Qualified For This New Funeral & Burial Coverage
                  Program For American Seniors?
                </b>
              </div>
              {/* <img className='topic-img-larger' src = {Headline} alt = "head"/> */}
              <img className="topic-img-middle-z" src={Head_bg} alt="head" />
              <div style={{ marginTop: "14px" }} className="main-des-5">
                Answer 2 simple questions below to check eligibility
              </div>
              {/* <div className="main-des-5"  style={{marginTop:'-5px'}}>
              If you have not yet claimed your monthly allowance then answer the questions below and once approved <b>you will have your $3,600 Grocery Allowance mailed to you within a few days ready for use!</b>
              </div>  */}
              {/* <div className='main-des-5' style = {{marginTop:"1rem"}}><b>Simplemente responda las siguientes preguntas:</b></div> */}
            </div>
            <div style={{ marginTop: "15px" }} className="survey">
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
                {/* {quiz ==="Do You Live in the USA?" &&  <div className="answer-btn-5" onClick={handleQuizP}>
              {count}
                </div>}
                {quiz ==="Do You Live in the USA?" && <div className="answer-btn-5" onClick={handleQuizP}>
              {text}
                </div>} */}
              </div>
            </div>
          </div>
        </>
      ) : step !== "process" && step !== "completed" ? (
        <div className="checking" style={{ fontWeight: "700" }}>
          {step}
        </div>
      ) : (
        <div className="checking">
          <div className="congrats">Congratulations, You Qualify!</div>
          <div></div>
          <div className="top-description-5">
            <b>Call us now</b> to secure your $25,000 benefit.
          </div>
          <div className="spots-count">Spot Remaining: 4</div>
          {/* <div className="tap-direction">👇 TAP BELOW TO CALL 👇</div> */}
          <a href="tel:+13214858035">
            <div className="call-btn" onClick={handleCall}>
              CALL (321) 485-8035
            </div>
          </a>
          {/* <div className="sub-title">We Have Reserved Your Spot</div> */}
          <div className="sub-description">
            Due to high call volume, your official agent is waiting for only 3
            minutes, then your spot will not be reserved.
          </div>
          <div className="timer">
            <div className="timer-cell">{min}</div>
            <div className="timer-cell">:</div>
            <div className="timer-cell">{second}</div>
          </div>
        </div>
      )}
      <div className="footer">
        <div className="terms">Terms & Conditions | Privacy Policy</div>
        <div className="copyright">
          Copyright © 2024 - All right reserved Daily America Savings.
        </div>
      </div>
    </div>
  );
}
