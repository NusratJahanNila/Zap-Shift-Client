import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQ = () => {

    const faqs = [
        {
            question: "How does this posture corrector work?",
            answer:
                "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
        },
        {
            question: "Is it suitable for all ages and body types?",
            answer:
                "Yes, posture correctors are designed to be adjustable and fit a wide range of body types and ages.",
        },
        {
            question: "Does it really help with back pain and posture improvement?",
            answer:
                "Consistency is key. With regular use, posture correctors can help reduce pain and improve posture over time.",
        },
        {
            question: "Does it have smart features like vibration alerts?",
            answer:
                "Some advanced models include vibration reminders when you slouch. Check product details for availability.",
        },
        {
            question: "How will I be notified when the product is back in stock?",
            answer:
                "You will receive an email notification as soon as the product is available again.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="my-15">
            <div className="text-center max-w-4xl mx-auto space-y-3 my-5">
                <h2 className="text-secondary text-2xl font-bold">Frequently Asked Question (FAQ)</h2>
                <p className="text-gray-500">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <div className="w-full max-w-3xl mx-auto space-y-3">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`border rounded-xl transition-all duration-200 ${openIndex === index
                            ? "bg-teal-50 border-teal-300"
                            : "bg-white border-gray-200"
                            }`}
                    >
                        {/* Question */}
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center p-5 text-left font-medium text-secondary"
                        >
                            {faq.question}
                            <FiChevronDown
                                className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {/* Answer */}
                        {openIndex === index && (
                            <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
