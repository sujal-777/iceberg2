"use client";

import { useEffect, useRef, useState } from "react";
import { X, Send, Smile } from "lucide-react";
import Image from "next/image";
import { PromptTemplate } from "@langchain/core/prompts";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

interface Message {
  sender: "agent" | "user";
  text: string;
}

interface UserInfo {
  name?: string;
  phone?: string;
  exam?: string;
}

const extractionQuestions = [
  "What is your name?",
  "What is your phone number?",
  "Which CA exam are you preparing for?",
];

export default function IcyChat({setOpenChat}:{setOpenChat:any}) {
  const [mode, setMode] = useState<"default" | "extraction" | "qa">("default");
  const [messages, setMessages] = useState<Message[]>([
    { sender: "agent", text: "Hello, I am July, how may I help you?" },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userInfo, setUserInfo] = useState<UserInfo>({});
  const [input, setInput] = useState("");

  const llm = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-flash",
    temperature: 0,
    maxRetries: 2,
    apiKey: "AIzaSyBTaTi3tBv2qEA9QWXVtR6l2inBFmOKKA4",
  });

  const businessContext = `“Empowering Future Chartered Accountants & Cost Accountants with Expert Guidance & Unmatched Test Series!”
ICEBERG is a leading CA & CMA test series platform designed to help students achieve top scores and career success.
Our comprehensive approach, including mock tests, expert counseling, and strategic study planning, has helped thousands of students clear their exams with confidence.
India’s Finest
Faculties for CA,
CS and CMA Classes
Led by India’s finest CA, CS, and CMA educators, we provide expert mentorship, conceptual clarity, and strategic exam guidance ensuring you not only excel in your journey but emerge as an industry-ready professional, equipped with practical skills, real-world knowledge, and the confidence to succeed.
CA ANIRUDH SHARMA
12+ Years in Coaching experience

A distinguished CA, CS and Law graduate, founded SPC in 2010 to revolutionize CA education. With innovative teaching methods and a student-centric approach, he has made complex subjects accessible, ensuring aspiring CAs receive top-notch guidance, support, and mentorship to excel.
`;

  const addAgentMessage = (text: string) => {
    setMessages((prev) => [...prev, { sender: "agent", text }]);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [...prev, { sender: "user", text }]);
  };

  const saveUserInfo = async (info: UserInfo) => {
    try {
      const response = await fetch("/api/storeUserInfo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      });
      console.log(await response.json());
      if (!response.ok) {
        addAgentMessage(
          "There was an error saving your information. Please try again."
        );
      }
    } catch (error) {
      console.error("API call error:", error);
      addAgentMessage(
        "There was an error saving your information. Please try again."
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const answer = input.trim();
    addUserMessage(answer);

    if (mode === "default") {
      setMode("extraction");
      setCurrentQuestionIndex(0);
      addAgentMessage(extractionQuestions[0]);
    } else if (mode === "extraction") {
      if (currentQuestionIndex === 0) {
        setUserInfo((prev) => ({ ...prev, name: answer }));
      } else if (currentQuestionIndex === 1) {
        setUserInfo((prev) => ({ ...prev, phone: answer }));
      } else if (currentQuestionIndex === 2) {
        setUserInfo((prev) => ({ ...prev, exam: answer }));
      }

      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);

      if (nextIndex < extractionQuestions.length) {
        addAgentMessage(extractionQuestions[nextIndex]);
      } else {
        addAgentMessage(
          "Thank you for providing your details. Saving your information..."
        );
        const completeUserInfo = { ...userInfo, exam: answer };
        await saveUserInfo(completeUserInfo);
        addAgentMessage("Your information has been saved successfully!");
        addAgentMessage("You can now ask me questions about the company.");
        setMode("qa");
      }
    } else if (mode === "qa") {
      const promptTemplate = new PromptTemplate({
        template: `${businessContext}\n\nQuestion: {question}\nAnswer:`,
        inputVariables: ["question"],
      });
      try {
        const prompt = await promptTemplate.format({ question: answer });
        const response = await llm.invoke(prompt);
        addAgentMessage(response.content.toString());
      } catch (err) {
        console.error(err);
        addAgentMessage(
          "Sorry, I encountered an error while processing your question."
        );
      }
    }
    setInput("");
  };
  function handelClose(){
    setOpenChat(false)
  }
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]); 
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#eef6ff]/30 rounded  absolute  left-[80%] top-1" >
      <div className="w-full max-w-md .overflow-hidden rounded-3xl  shadow-lg bg-white">
        {/* Header */}
        <div className="relative rounded-t-3xl p-6 bg-gradient-to-r from-[#4629f2] to-[#8b5cf6] text-white">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/iceberg-chat.jpeg"
                alt="Icy logo"
                width={48}
                height={48}
              />
            </div>
            <h1 className="text-3xl font-bold">Icy</h1>
          </div>
          <p className="mt-4 text-lg">
            Your Ai companion, feel free to
            ask me about anything!
          </p>
          <button onClick={handelClose} className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="p-6 bg-[#eef6ff] h-[500px] flex flex-col overflow-y-auto"
         ref={chatContainerRef}
         >
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`mb-6 flex ${
            msg.sender === "agent" ? "items-start" : "items-end flex-row-reverse"
          }`}
        >
          {msg.sender === "agent" && (
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/iceberg-chat.jpeg"
                alt="Icy avatar"
                width={40}
                height={40}
              />
            </div>
          )}
          <div
            className={`p-4 rounded-2xl max-w-[80%] ${
              msg.sender === "agent"
                ? "bg-blue-100 text-blue-900 ml-3"
                : "bg-[#4629f2] text-white mr-3"
            }`}
          >
            <p>{msg.text}</p>
          </div>
        </div>
      ))}
    </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-2 p-2 border border-gray-200 rounded-full">
            <button type="button" className="p-2">
            </button>
            <input
              type="text"
              placeholder="Reply ..."
              className="flex-1 outline-none bg-transparent"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="w-12 h-12 rounded-full bg-[#4629f2] flex items-center justify-center"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
