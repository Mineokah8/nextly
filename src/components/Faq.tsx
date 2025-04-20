"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "How do I create an account as a buyer or seller?",
    answer: "You can sign up as a buyer or seller by selecting your role during the registration process. Buyers can browse and purchase products, while sellers get access to tools for managing listings, orders, and payments.",
  },
  {
    question: "Can I switch between buyer and seller accounts?",
    answer: "Yes, users can switch between buyer and seller modes from their account dashboard. If you initially signed up as a buyer, you can activate seller features at any time.",
  },
  {
    question: " How are payments processed and when do sellers get paid? ",
    answer:
      "Payments are securely processed through our payment gateway. Sellers receive payouts to their linked bank account or wallet once an order is confirmed and marked as delivered, typically within 3–5 business days.",
  },
  {
    question: "What should I do if I receive a damaged or incorrect item?",
    answer:
      "If you receive a damaged or incorrect item, you can initiate a return or request a refund through your order history page. Be sure to report the issue within the return window stated in our return policy.",
  },
  {
    question: "How can I ensure my store or purchases are secure?",
    answer:
      "We prioritize your safety by using encrypted transactions, verifying sellers, and monitoring for suspicious activity. Always communicate and complete transactions within the platform to stay protected.If you encounter any issues, our support team is available to assist you.",
    }
];
