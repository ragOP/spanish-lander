      const sections = [
        {
          messages: [
            {
              text: `Hi 👏`,
              delay: 1000,
            },
            {
              text: "I'm Anna from Food Allowances",
              delay: 1000,
            },
            {
              text: `find out if you qualify for up to a $40,000 funeral benefit? Tap Yes! 😃`,
              delay: 1000,
            },
            {
              text: null,
              delay: 0,
              selections: [
                {
                  title: "Yes",
                  nextSectionIndex: 1,
                },
              ],
            },
          ],
        },
        {
          messages: [
            {
              text: "Okay, let me ask you a couple quick questions.",
              delay: 1000,
            },
            {
              text: "What is your age range?",
              delay: 1000,
            },
            {
              delay: 0,
              selections: [
                {
                  title: "50-60",
                  nextSectionIndex: 2,
                },
                {
                  title: "61-70",
                  nextSectionIndex: 2,
                },
                {
                  title: "71-79",
                  nextSectionIndex: 2,
                },
              ],
            },
          ],
        },
        {
          messages: [
            {
              text: "Who is your beneficiary?",
              delay: 1000,
            },
            {
              delay: 0,
              selections: [
                {
                  title: "Your Self",
                  nextSectionIndex: 3,
                },
                {
                  title: "Spouse",
                  nextSectionIndex: 3,
                },
                {
                  title: "Other",
                  nextSectionIndex: 3,
                },
              ],
            },
          ],
        },
        {
          messages: [
            {
              text: `🎉 Congratulations! 🎁`,
              delay: 1000,
            },
            {
              text: "You're pre-qualified for a $40,000 funeral benefit.",
              delay: 1000,
            },
            {
              text: "Tap the button below to call now to get your $40,000 funeral benefit, It only takes 2 minutes.",
              delay: 1000,
            },
            {
              delay: 0,
              call_now: [
                {
                  title: "+1(866)-329-3782",
                  phone_num: "+18663293782",
                },
              ],
            },
          ],
        },
      ];

      let currentSectionIndex = 0;

      async function displayMessage(section) {
        const chatContainer = document.getElementById("chatContainer");

        const agentBlock = document.createElement("div");
        agentBlock.className = "agent-container flex items-end w-full";

        const avatarContainer = document.createElement("div");
        avatarContainer.className = "agent-img flex-shrink-0 ";

        const avatar = document.createElement("img");
        avatar.src = "https://sub.foodallowances.org/images/avatar.webp";
        avatar.alt = "Emily Avatar";
        avatar.className = "w-8 h-8 rounded-full";
        avatarContainer.appendChild(avatar);

        agentBlock.appendChild(avatarContainer);

        const chatBubbleContainer = document.createElement("div");
        chatBubbleContainer.className = "agent-chat ml-3 ";
        agentBlock.appendChild(chatBubbleContainer);

        chatContainer.appendChild(agentBlock);

        // Display each message in agent block
        for (let i = 0; i < section.messages.length; i++) {
          const message = section.messages[i];

          const chatMessage = document.createElement("div");
          chatMessage.className =
            "bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit";

          if (message.text) {
            chatMessage.innerHTML = typingEffect();
            chatBubbleContainer.appendChild(chatMessage);
            scrollToBottom();

            // Wait for the delay
            await new Promise((resolve) => setTimeout(resolve, message.delay));
          }
          if (message.text) {
            chatMessage.innerHTML = `<p class="text-md">${message.text}</p>`;
            scrollToBottom();
          }

          if (message.selections) {
            const selectionContainer = document.createElement("div");

            selectionContainer.className = `agent-chat-options flex bg-gray-200 p-3 rounded-lg shadow-xs mt-2 ${
              message.selections.length <= 2
                ? "w-fit gap-[14px]"
                : "flex-col w-[190px]"
            }`;

            message.selections.forEach((option) => {
              const button = document.createElement("button");
              button.className =
                "chat-button bg-blue-500 border-none rounded-full text-white text-base font-bold my-2 min-w-[100px] px-3 py-2.5";
              button.textContent = option.title;
              button.onclick = () => handleUserResponse(option);

              selectionContainer.appendChild(button);
            });

            chatBubbleContainer.appendChild(selectionContainer);
            scrollToBottom();
          }

          if (message.call_now) {
            const callNowContainer = document.createElement("div");

            callNowContainer.className = `agent-chat-options flex bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit `;

            message.call_now.forEach((option) => {
              const callButton = document.createElement("button");
              callButton.className =
                "chat-button bg-blue-500 border-none rounded-full text-white text-base font-bold my-2 min-w-[100px] px-3 py-2.5";

              const callLink = document.createElement("a");

              callLink.href = `tel:${option.phone_num}`;

              callLink.textContent = option.title;

              callButton.appendChild(callLink);

              callNowContainer.appendChild(callButton);
            });

            chatBubbleContainer.appendChild(callNowContainer);
            scrollToBottom();
          }
        }
      }

      async function handleSection(sectionIndex) {
        const section = sections[sectionIndex];
        await displayMessage(section);
      }

      function handleUserResponse(option) {
        addUserMessage(option.title);

        // Hide the last agent message block
        const chatContainer = document.getElementById("chatContainer");
        const agentMessages = chatContainer.querySelectorAll(
          ".agent-chat-options"
        );

        if (agentMessages.length > 0) {
          const lastAgentMessage = agentMessages[agentMessages.length - 1];
          lastAgentMessage.classList.add("hidden");
        }

        if (option.nextSectionIndex !== undefined) {
          currentSectionIndex = option.nextSectionIndex;
          setTimeout(() => handleSection(currentSectionIndex), 1000);
        }
      }

      // Function to add user message
      function addUserMessage(text) {
        const chatContainer = document.getElementById("chatContainer");

        const userBlock = document.createElement("div");
        userBlock.className =
          "flex items-center py-4 justify-end  gap-x-2 user-container";

        const userMessage = document.createElement("div");
        userMessage.className =
          "bg-blue-500 text-white p-3 rounded-lg shadow-xs mt-2 w-fit";
        userMessage.innerHTML = `<p class="text-md">${text}</p>`;

        const userImge = document.createElement("div");
        userImge.className = `flex-shrink-0 avatar-user w-8`;
        userImge.innerHTML = ` <img class="w-8 h-8 rounded-full" src="https://sub.foodallowances.org/images/user.png" />`;

        userBlock.appendChild(userMessage);
        userBlock.appendChild(userImge);
        chatContainer.appendChild(userBlock);
      }

      // Typing animation
      function typingEffect() {
        return `
    <div class="typing-animation">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;
      }

      // scrollToBottom
      function scrollToBottom() {
        const object = $("main");
        $("html, body").animate(
          {
            scrollTop:
              object.offset().top + object.outerHeight() - $(window).height(),
          },
          "fast"
        );
      }

      handleSection(currentSectionIndex);
