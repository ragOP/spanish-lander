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

  const SlideUp = cssTransition({
    enter: "toast-enter",
    exit: "toast-exit",
  });
  
  const messages = [
    "Emily A. Rodriguez from Miami, FL just qualified for a $3,600 Grocery Allowance.",
    "Michael D. Johnson from Dallas, TX just qualified for a $3,600 Grocery Allowance.",
    "Sophia L. Thompson from Los Angeles, CA just qualified for a $3,600 Grocery Allowance.",
    "Ethan M. Baker from Chicago, IL just qualified for a $3,600 Grocery Allowance.",
    "Ava K. Campbell from Seattle, WA just qualified for a $3,600 Grocery Allowance."
  ];
  
  // Function to shuffle array in place
  const shuffleArray = (array:any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  
  shuffleArray(messages);
  
  const notify = (message:any) => {
    // Dismiss all existing toasts
    toast.dismiss();
    let boldedMessage = message;
  
    // Make the word "Allowance" bold in all lines
    boldedMessage = boldedMessage.replace(
      /\$3,600 Grocery Allowance/g,
      '<strong class="green-bold">$3,600 Grocery Allowance</strong>'
    );
  
    // Make specific dollar amounts bold only in specific lines
    const specialAmounts = ["$16,800", "$16,800", "$16,800", "$16,800"];
    specialAmounts.forEach((amount) => {
      if (message.includes(amount)) {
        boldedMessage = boldedMessage.replace(
          amount,
          `<strong class="green-bold">${amount}</strong>`
        );
      }
    });
  
    // Show new toast
    toast(<div dangerouslySetInnerHTML={{ __html: boldedMessage }} />, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      closeButton: false,
    });
  };
  
  useEffect(() => {
    const delayedEffect = setTimeout(() => {
      // Create a function to handle the logic
      const showRandomToast = () => {
        const randomTime = 6000;
        const randomMessage =
          messages[Math.floor(Math.random() * messages.length)];
        notify(randomMessage);
        return randomTime;
      };
  
      // Show the first toast
      let nextTime = showRandomToast();
  
      // Set up a recurring timer
      const timer = setInterval(() => {
        nextTime = showRandomToast();
      }, nextTime);
  
      // Cleanup
      return () => {
        clearInterval(timer);
      };
    }, 6000); // 6-second delay before the useEffect code runs
  
    // Cleanup for the setTimeout
    return () => {
      clearTimeout(delayedEffect);
    };
  }, []);
  
  useEffect(() => {
    window.document.title = "Senior's Allowance Program 2024";

    axios
      .get(process.env.REACT_APP_PROXY + `/visits/8`)
     
  }, []);

  const handleCall = () => {

  };

  const [quiz, setQuiz] = useState("Are you over 50?");
  const [step, setStep] = useState("process");
  const [min, setMin] = useState(3);
  const [second, setSecond] = useState<any>(0);
  const [yes, setYes] = useState("Yes");
  const [no, setNo] = useState("No");
  

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
      setQuiz("Do You Live in the USA?");
    } else if (quiz === "Do You Live in the USA?") {
      setQuiz("Are you employed?");
    } else {
      setStep("Review the answers");
      topScroll("top");
    }
  };

  const handleQuizN = () => {
    topScroll("btn");
    if (quiz === "Are you over 50?") {
      setQuiz("Do You Live in the USA?");
    } else if (quiz === "Do You Live in the USA?") {
      setQuiz("Are you married?");
    } else {
      setStep("Review the answers");
      topScroll("top");
    }
  };

  return (
    <div>
      {/* <ToastContainer /> */}
      <div style={{ marginBottom: '4px' }} className="top-sticky-blue-test2" id="top">
        Senior's Allowance Program 2024
      </div>
      {step === "process" ? (
        <>
          <div className="main-container-5">
            <div className="main-descrition-5-5"> 
              <div className="main-des-title-6-7">
                <b>
                  Are You Qualified For This New Funeral & Burial Coverage Program For American Seniors?
                </b>
              </div>
              {/* <img className='topic-img-larger' src = {Headline} alt = "head"/> */}
              <img className="topic-img-middle-z" src={Head_bg} alt="head" />
              <div style={{ marginTop: '14px',marginLeft:'20px' }} className="main-des-5">
                Answer 3 simple questions below to check eligibility
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
        <div className="checking">
          <div className="congrats">Congratulations, You Qualify!</div>
          <div className="top-description-5">
            <b>Call us now</b> to secure your $25,000 benefit.
          </div>
          <div className="spots-count">Spot Remaining: 4</div>
          <a href="tel:+13214858035">
            <div className="call-btn" onClick={handleCall}>
            CALL (321) 485-8035
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
      )}
      <div className="footer">
        <div className="terms">Terms & Conditions | Privacy Policy</div>
      </div>
      {/* <ToastContainer
        transition={SlideUp}
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      /> */}
    </div>
  );
}
