import { useState } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import Link from "next/link";

export default function Price() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAnswerSelection = (questionId, answerId, price) => {
    setSelectedAnswers((prevSelectedAnswers) => [
      ...prevSelectedAnswers,
      { questionId, answerId },
    ]);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + price);

    if (currentQuestionIndex === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      const previousQuestionId = questions[currentQuestionIndex - 1].id;
      const previousAnswer = selectedAnswers.find(
        (answer) => answer.questionId === previousQuestionId
      );
      const previousQuestion = questions.find(
        (question) => question.id === previousQuestionId
      );

      if (previousAnswer) {
        const previousAnswerPrice = previousQuestion.answers.find(
          (answer) => answer.id === previousAnswer.answerId
        )?.price;

        if (previousAnswerPrice) {
          setTotalPrice(
            (prevTotalPrice) => prevTotalPrice - previousAnswerPrice
          );
        }
      }

      setSelectedAnswers((prevSelectedAnswers) =>
        prevSelectedAnswers.slice(0, prevSelectedAnswers.length - 1)
      );
      setCurrentQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers([]);
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setTotalPrice(0);
  };

  const questions = [
    {
      id: 1,
      question: "制作したいホームページの用途を教えてください。",
      answers: [
        { id: 1, label: "コーポレートサイト", price: 30000 },
        { id: 2, label: "ECサイト", price: 40000 },
        { id: 3, label: "LPサイト", price: 25000 },
      ],
    },
    {
      id: 2,
      question: "ページ数はおよそ何ページくらいですか？",
      answers: [
        { id: 1, label: "1~10", price: 10000 },
        { id: 2, label: "11~20", price: 20000 },
        { id: 3, label: "21~30", price: 30000 },
      ],
    },
    {
      id: 3,
      question: "トップページのおよその縦幅を教えてください。",
      answers: [
        { id: 1, label: "~4000px", price: 15000 },
        { id: 2, label: "4001~8000px", price: 20000 },
        { id: 3, label: "8001px~", price: 25000 },
      ],
    },
    {
      id: 4,
      question: "アニメーションのおよその数を教えてください。",
      answers: [
        { id: 1, label: "1~3種類", price: 15000 },
        { id: 2, label: "4~7種類", price: 25000 },
        { id: 3, label: "8~", price: 40000 },
      ],
    },
    {
      id: 5,
      question: "お問合せフォームは必要ですか？",
      answers: [
        { id: 1, label: "はい", price: 15000 },
        { id: 2, label: "いいえ", price: 0 },
      ],
    },
    {
      id: 5,
      question: "コーポレートサイトの場合、管理画面は必要ですか？",
      answers: [
        { id: 1, label: "はい", price: 17000 },
        { id: 2, label: "いいえ", price: 0 },
      ],
    },
    // 追加の質問をここに追加
  ];

  const basePrice = 50000; // 基本料金

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers.find(
    (answer) => answer.questionId === currentQuestion?.id
  )?.answerId;

  const showQuestions = !showResult && currentQuestionIndex < questions.length;

  return (
    <div className="bg-base">
      <Header />
      <div className="relative bg-price bg-cover md:h-44 h-48 text-white">
        <div className="md:w-4/5 mx-auto px-5 md:pt-16 pt-20">
          <div className="w-fit">
            <h1 className="mx-auto bottom-16   md:text-5xl text-4xl">PRICE</h1>
            <p className="pt-1 text-sm text-center md:text-base">料金</p>
          </div>
        </div>
      </div>
      <div className="md:w-4/5 mx-auto my-0 px-5">
        <h1 className="text-2xl md:text-3xl md:mt-18 mt-14  border-l-4 border-b  border-b-gray-600 border-black pl-2 w-full">
          料金シミュレーター
        </h1>
        <p className="md:text-base text-sm mt-5 ">
          サイトを制作させていただくにあたり目安になる料金シュミレーターです。
          <br />
          記入項目以外にもご要望ある方はお気軽に
          <Link href="/contact">
            <a className="text-blue-600">こちら</a>
          </Link>
          からご連絡ください。
        </p>
        {showQuestions && (
          <>
            <h2 className="text-center text-3xl font-bold mt-16 leading-relaxed">
              {currentQuestion.question}
            </h2>
            <div className="md:mt-10 mt-1 md:flex justify-between md:w-full w-full">
              {currentQuestion.answers.map((answer) => (
                <button
                  key={answer.id}
                  className={` block md:mx-auto mx-auto md:px-3 px-0 border cursor-pointer text-white  bg-black hover:-translate-y-1 hover:scale-110 md:w-52 md:py-3 w-4/5 py-3  rounded-full  transition duration-700 ease-in-out mt-10 md:mt-5 ${
                    selectedAnswer === answer.id ? "opacity-30" : ""
                  }`}
                  onClick={() =>
                    handleAnswerSelection(
                      currentQuestion.id,
                      answer.id,
                      answer.price
                    )
                  }
                >
                  {answer.label}
                </button>
              ))}
            </div>
            {currentQuestionIndex > 0 && (
              <button
                className="md:block cursor-pointer flex justify-center md:w-52 w-full  md:mt-5 mt-10"
                onClick={handlePreviousQuestion}
              >
                戻る
              </button>
            )}

            <div className=" flex justify-center mt-20 items-baseline">
              <label htmlFor="totalPrice">合計金額:</label>

              <p id="totalPrice" className="text-3xl pl-3">
                {totalPrice}
              </p>
              <span className="ml-1">円</span>
            </div>
          </>
        )}
        {showResult && (
          <>
            <h2 className="text-center text-3xl font-bold mt-16">
              ありがとうございました！
            </h2>
            <div className=" flex justify-center mt-16 items-baseline">
              <label htmlFor="totalPrice">合計金額:</label>

              <p id="totalPrice" className="text-5xl pl-3">
                {totalPrice}
              </p>
              <span className="ml-1">円</span>
            </div>
            <div className="flex justify-center mt-5">
              <button
                className="w-52 py-3 block border cursor-pointer text-white bg-black hover:-translate-y-1 hover:scale-110  p-5 rounded-full transition duration-700 ease-in-out mt-5"
                onClick={handleReset}
              >
                再設定
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
