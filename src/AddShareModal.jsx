import React, { useState } from "react";
import Quiz from "react-quiz-component";
import { quiz } from "./quiz ";

const AddShareModal = ({ setModal, fetchData }) => {
  const [isFormVisable, setIsFormVisable] = useState(false);
  const [quizResult, setQuizResultState] = useState(null); // حالة لحفظ النتيجة
  const [comment, setComment] = useState(""); // لتخزين التعليق
  const [bestPlanet, setBestPlanet] = useState(""); // لتخزين أفضل كوكب
  const [imageUrl, setImageUrl] = useState(""); // لتخزين رابط الصورة
  const [file, setFile] = useState(null); // لتخزين رابط الصورة
  const [err, serErr] = useState(null); // لتخزين رابط الصورة
  const [name, setName] = useState(""); // لتخزين رابط الصورة

  // const handelGoogleLogin = async (e) => {
  //   try {
  //     // الخطوة 1: استدعاء Google API لتسجيل الدخول باستخدام fetch
  //     const response = await fetch(
  //       "https://nasaspaceapps.azurewebsites.net/api/Authentication/googlelogin",
  //       {
  //         method: "GET", // استخدام GET هنا
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     // الخطوة 2: التحقق من نجاح الطلب واستلام الجواب من الـ API
  //     if (!response.ok) {
  //       throw new Error("Login failed");
  //     }

  //     const data = await response.json(); // استخراج البيانات من الجواب

  //     const { token, sessionId } = data;

  //     // الخطوة 3: تخزين التوكن في الكوكيز
  //     if (token) {
  //       Cookies.set("authToken", token, { expires: 7 }); // تخزين لمدة 7 أيام
  //     } else if (sessionId) {
  //       Cookies.set("sessionId", sessionId, { expires: 7 });
  //     }

  //     // القيام بأي عملية إضافية بعد تسجيل الدخول بنجاح
  //     console.log("Login successful");
  //   } catch (error) {
  //     // التعامل مع الأخطاء
  //     console.error("Login failed", error);
  //   }
  // };

  // const handelGithubLogin = async (e) => {
  //   try {
  //     // الخطوة 1: استدعاء Google API لتسجيل الدخول باستخدام fetch
  //     const response = await fetch(
  //       "https://nasaspaceapps.azurewebsites.net/api/Authentication/googlelogin",
  //       {
  //         method: "GET", // استخدام GET هنا
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     // الخطوة 2: التحقق من نجاح الطلب واستلام الجواب من الـ API
  //     if (!response.ok) {
  //       throw new Error("Login failed");
  //     }

  //     const data = await response.json(); // استخراج البيانات من الجواب

  //     const { token, sessionId } = data;

  //     // الخطوة 3: تخزين التوكن في الكوكيز
  //     if (token) {
  //       Cookies.set("authToken", token, { expires: 7 }); // تخزين لمدة 7 أيام
  //     } else if (sessionId) {
  //       Cookies.set("sessionId", sessionId, { expires: 7 });
  //     }

  //     // القيام بأي عملية إضافية بعد تسجيل الدخول بنجاح
  //     console.log("Login successful");
  //   } catch (error) {
  //     // التعامل مع الأخطاء
  //     console.error("Login failed", error);
  //   }
  // };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset"); // ضع هنا الـ upload_preset الخاص بك
    formData.append("cloud_name", "your_cloud_name"); // ضع هنا اسم الـ cloud الخاص بك

    try {
      const response = await fetch(`${CLOUDINARY_URL}/image/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setImageUrl(imageUrl);
      console.log("imageUrl", imageUrl); // حفظ رابط الصورة المرفوعة
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      uploadImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // تحقق من أن حقل "bestPlanet" ليس فارغًا
    if (!bestPlanet.trim()) {
      serErr("Please enter your favorite planet.");
      return; // لا تتابع عملية الإرسال إذا كان الحقل فارغًا
    }

    // تأكد من استخراج القيم الصحيحة
    const score = quizResult?.correctPoints || 0;
    const favoritePlanet = bestPlanet.trim(); // تأكد من أن الاسم ليس فارغًا

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", file);
    formData.append("score", score);
    formData.append("favoritePlanet", favoritePlanet); // تأكد من أن هذا الحقل يحتوي على قيمة صالحة
    formData.append("comment", comment);

    try {
      const response = await fetch(
        `https://nasaspaceapps.azurewebsites.net/api/Contribution/contribution?userId=ef44e1bd-d0c1-47c6-ac3a-a62d1198502a`,
        {
          method: "POST",
          body: formData, // استخدام FormData
        }
      );

      const result = await response.json();
      // console.log("Data submitted successfully:", result);
    } catch (error) {
      // console.error("Error submitting data:", error);
    }

    fetchData();
    setModal(false);
  };

  const setQuizResult = (obj) => {
    setQuizResultState(obj); // تخزين النتيجة في الحالة
    setIsFormVisable(true);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "70px",
        left: "50%",
        transform: "translate(-50%)",
        width: "85%",
        height: "80%",
        background: "#000000",
        padding: "20px",
        borderRadius: "8px",
        zIndex: 99,
      }}
    >
      <button
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "none",
          border: "none",
          fontSize: "2rem",
          cursor: "pointer",
          color: "#FCFFFF",
        }}
        onClick={() => setModal(false)}
      >
        x
      </button>
      <div className="quiz">
        <Quiz
          quiz={quiz}
          shuffle={true}
          shuffleAnswer={true}
          showDefaultResult={false}
          onComplete={setQuizResult}
        />
      </div>
      {isFormVisable && (
        <>
          <form
            className="form"
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              padding: "20px",
              gap: "20px",
            }}
          >
            {quizResult && (
              <div style={{ color: "#fff", marginBottom: "20px" }}>
                <h3>Quiz Result:</h3>
                <p>
                  Score: {quizResult.correctPoints} / {quizResult.totalPoints}
                </p>
              </div>
            )}
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                padding: "10px 20px ",
                outline: "none",
                borderRadius: "5px",
                border: "none",
                fontSize: "1.5rem",
              }}
              placeholder="Enter Name"
            />

            <input
              required
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              style={{
                padding: "10px 20px ",
                outline: "none",
                borderRadius: "5px",
                border: "none",
                fontSize: "1.5rem",
              }}
              placeholder="write a comment"
            />

            <input
              required
              type="text"
              value={bestPlanet}
              onChange={(e) => setBestPlanet(e.target.value)}
              style={{
                padding: "10px 20px ",
                outline: "none",
                borderRadius: "5px",
                border: "none",
                fontSize: "1.5rem",
              }}
              placeholder="which the best planet, why?"
            />

            <input type="file" onChange={handleImageChange} />

            <input
              type="submit"
              value="Submit"
              style={{
                marginTop: "15px",
                padding: "12px 20px",
                border: "none",
                borderRadius: "25px",
                backgroundColor: "#A99797",
                fontSize: "1.5rem",
                fontWeight: "500",
                cursor: "pointer",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                marginTop: "15px",
              }}
              className="lobin-btns-wraper"
            >
              {/* <button
                onClick={() => handelGoogleLogin()}
                style={{
                  padding: "15px 20px",
                  border: "none",
                  borderRadius: "25px",
                  backgroundColor: "#ffffff",
                  fontSize: "1.3rem",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                Sign in with Google
              </button> */}
              {/* <button
                onClick={() => handelGithubLogin()}
                style={{
                  padding: "15px 20px",
                  border: "none",
                  borderRadius: "25px",
                  backgroundColor: "#444444",
                  fontSize: "1.3rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                Sign in with Github
              </button> */}
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default AddShareModal;
