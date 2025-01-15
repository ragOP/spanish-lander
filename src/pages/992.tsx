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
// const tagManagerArgs = {
//   gtmId: "GTM-KZJBC3B",
// };

// TagManager.initialize(tagManagerArgs);

export default function Fifth_SP() {

  const SlideUp = cssTransition({
    enter: "toast-enter",
    exit: "toast-exit",
  });
  
  const messages = [
    "Michael D. from Texas just qualified for a $25,000 Final Expense Coverage",
    "Jane L. Rodriguez. from Dallas just qualified for a $25,000 Final Expense Coverage",
    "Sunny D. from LOS ANGELES,just qualified for a $40,000 Final Expense Coverage",
    "Moody K. from Texas just qualified for a $36,000 Final Expense Coverage",
    "Tom D. from Seattle just qualified for a $40,000 Final Expense Coverage"
  ];
  
  // Function to shuffle array in place
  const shuffleArray = (array:any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  
  shuffleArray(messages);
  
  const notify = (message: any) => {
    // Dismiss all existing toasts
    toast.dismiss();
  
    // Bold formatting for specific keywords
    let boldedMessage = message.replace(
      /\$40,000 Final Expense Coverage/g,
      '<strong class="green-bold">$40,000 Final Expense Coverage</strong>'
    );
  
    const specialAmounts = ["$25,000", "$36,000", "$16,800"];
    specialAmounts.forEach((amount) => {
      if (message.includes(amount)) {
        boldedMessage = boldedMessage.replace(
          amount,
          `<strong class="green-bold">${amount}</strong>`
        );
      }
    });
  
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
      // Function to display a random toast
      const showRandomToast = () => {
        const randomMessage =
          messages[Math.floor(Math.random() * messages.length)];
        notify(randomMessage);
      };
  
      // Show the first toast
      showRandomToast();
  
      // Set up a recurring timer with a fixed 5-second interval
      const timer = setInterval(() => {
        showRandomToast();
      }, 5000); // 5-second delay between toasts
  
      // Cleanup
      return () => {
        clearInterval(timer);
      };
    }, 6000); // Initial 6-second delay before starting the logic
  
    // Cleanup for the setTimeout
    return () => {
      clearTimeout(delayedEffect);
    };
  }, []);
  
  
  
  useEffect(() => {
    window.document.title = "Benefits For Elderly";

    axios
      .get(process.env.REACT_APP_PROXY + `/visits/8`)
     
  }, []);

  const handleCall = () => {

  };

  const [quiz, setQuiz] = useState("1. Are you over 50?");
  const [step, setStep] = useState("process");
  const [min, setMin] = useState(3);
  const [second, setSecond] = useState<any>(0);
  const [yes, setYes] = useState("YES, I'M 50 OR OLDER");
  const [no, setNo] = useState("NO, I'M 49 OR YOUNGER");
  

  const stepProcess = () => {
    if (step === "Reviewing the answers...") {
      setTimeout(() => {
        setStep("Searching for available spots...");
      }, 1500);
    }
    if (step === "Searching for available spots...") {
      setTimeout(() => {
        setStep("Confirming Eligibility...");
      }, 1500);
    }
    if (step === "Confirming Eligibility...") {
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
    if (quiz === "1. Are you over 50?") {
      setQuiz("2. Do You Live in the USA?");
      setYes("Yes");
      setNo("No");
    } else {
      setStep("Reviewing the answers...");
      topScroll("top");
    }
  };

  const handleQuizN = () => {
    topScroll("btn");
    if (quiz === "1. Are you over 50?") {
      setQuiz("2. Do You Live in the USA?");
      setYes("Yes");
      setNo("No");
    } else {
      setStep("Reviewing the answers...");
      topScroll("top");
    }
  };

  const closingDate = new Date(); // Gets today's date
  const formattedDate = closingDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <div>
      {/* <ToastContainer /> */}

      <div
  style={{
    marginBottom: '4px',
    overflow: 'hidden', // Ensure the text doesn't overflow outside the container
    whiteSpace: 'nowrap', // Prevent the text from wrapping
  }}
  className="top-sticky-blue-test2Above"
  id="top"
>
  <div
    style={{
      display: 'inline-block',
      animation: 'scroll 20s linear infinite', // Slower animation
    }}
  >
 {`Hotlines to claim this benefit will close on ${formattedDate}, 9 P.M.`}
  </div>
  <style>
    {`
      @keyframes scroll {
        0% {
          transform: translateX(100%); /* Start off-screen to the right */
        }
        100% {
          transform: translateX(-100%); /* End off-screen to the left */
        }
      }
    `}
  </style>
</div>
      <div style={{ marginBottom: '4px' }} className="top-sticky-blue-test2" id="top">
      Benefits For Elderly
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
  Cover All Your Burial Costs and Unpaid Debts with This  {""}
    <span style={{ backgroundColor: "#FFC300" }}>
    Final Allowance Benefit—Up to $25,000
    </span>{" "}
    in Coverage!
  </b>
</div>


              {/* <img className='topic-img-larger' src = {Headline} alt = "head"/> */}
              <img className="topic-img-middle-z" src={Head_bg} alt="head" />
              <div style={{ marginTop: '14px',marginLeft:'10px' }} className="main-des-5">
              Eligible Americans are taking advantage of this opportunity to secure their $25,000 in Final Allowance Benefit, which covers all of their Burial Costs and Unpaid Debts!
<br /> <br />

Simply answer the questions below and claim your benefit while you still can!
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
           
          <b>Make A Quick Call</b> To Claim Your Final Allowance Benefit Worth Upto $25,000!
          </div>
          <div className="spots-count">Spot Remaining: 4</div>
          <a href="tel:++13214858035">
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
