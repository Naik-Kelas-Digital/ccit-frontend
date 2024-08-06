const FaqPage = () => {
    const faqs = [
      {
        question: "What is your return policy?",
        answer: "You can return any item within 30 days of purchase if the item is in its original condition. Please contact our support team to initiate a return.",
      },
      {
        question: "How do I track my order?",
        answer: "You can track your order using the tracking number provided in your shipping confirmation email. You can also track your order from your account on our website.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and bank transfers. For more details, please visit our payment methods page.",
      },
      {
        question: "How can I update my shipping address?",
        answer: "You can update your shipping address in your account settings before placing an order. If you need to change the address after placing an order, please contact our support team as soon as possible.",
      },
      {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on the destination. Please check our shipping policy for more information.",
      },
      {
        question: "What should I do if I receive a damaged or incorrect item?",
        answer: "If you receive a damaged or incorrect item, please contact our support team within 7 days of delivery. We will assist you in returning the item and getting a replacement or refund.",
      },
    ];
  
    return (
      <div className="min-h-screen flex justify-center items-center py-10 bg-gray-100">
        <div className="max-w-[1440px] w-full bg-white p-10 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-2">{faq.question}</h2>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default FaqPage;
  