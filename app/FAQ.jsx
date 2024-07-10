"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";


export default function FAQ() {
  return (
    <div id="faq" className="w-[95%] items-center flex-col pt-[80px] mx-auto py-14">
        <h2 className="text-center text-2xl lg:text-4xl font-bold text-black">
            FAQ
          </h2>
      <div className=" relative pt-[40px]">
      <Accordion selectionMode="multiple">
          <AccordionItem
            key="1"
            title="What is passport ?"
            aria-label="Accordion 1"
           
          >
            A passport is a travel document issued by a country’s government to
            its citizens that verifies the identity and nationality of the
            holder for the purpose of international travel. Passports are small
            booklets that typically contain the bearer’s name, place of birth,
            date of birth, the date of issue, date of expiry, passport number,
            photo and signature.
          </AccordionItem>
          <AccordionItem
            key="2"
            title="What is Ordinary, Diplomatic or Official Passport ?"
            aria-label="Accordion 2"
            
          >
            There are mainly two types of Passport issued by the Government of
            India i.e., Ordinary passport and Diplomatic/Official passport. All
            citizens can apply for ordinary passport whereas,
            Diplomatic/Official passport is only for those government officials
            who are being sent on overseas official duty only.
          </AccordionItem>
          <AccordionItem
            key="3"
            title="What happens if I lose my passport ?"
            aria-label="Accordion 3"
            
          >
            Passports are important legal documents and if you lose your
            passport or suspect it might have been stolen, this has to be
            reported to the Police. You can then apply to have your passport
            reissued.
          </AccordionItem>
          <AccordionItem
            key="4"
            title="Who Qualifies For Indian passport ?"
            aria-label="Accordion 4"
            
          >
            If you are qualified for the citizenship of India according to the
            Indian Constitution then, you can apply for Indian passport i.e., By
            being born in India, Born elsewhere but one of the parents is
            Indian, or by being granted Indian citizenship etc.
          </AccordionItem>
          <AccordionItem
            key="5"
            title="How many days it will take to get Passport ?"
            aria-label="Accordion 5"
            
          >
            Generally, it will take up to 30 days from the date of application.
          </AccordionItem>
          <AccordionItem
            key="6"
            title="What is PSK?"
            aria-label="Accordion 6"
            
          >
            PSK – Passport Service Kendra – is the passport office where you can
            get information about your passport and apply for either a new
            passport or renewal of an existing passport. There are dozens of
            different PSK offices across India.
          </AccordionItem>
          <AccordionItem
            key="7"
            title="How to track my passport application?"
            tiaria-labeltle="Accordion 7"
            
          >
            You can simply check your passport status on
            www.passportindia.gov.in by clicking on “Track your application
            status” and then enter your 15-digit file number (provided after
            submitting your passport application) and birth date.
          </AccordionItem>
          <AccordionItem
            key="8"
            title="Who can help if I have questions about my passport?"
            aria-label="Accordion 8"
            
          >
            You can reach to us for any questions related to your Passport. We
            are always there to help you out.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
// 'use client'
// import React from "react";
// import {Accordion, AccordionItem} from "@nextui-org/react";
// import { Plus } from "lucide-react";

// export default function FAQ () {
//   const defaultContent =
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

//   return (
//     <Accordion selectionMode="multiple">
//       <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1" indicator={<Plus />}>
//         {defaultContent}
//       </AccordionItem>
//       <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2" indicator={<Plus />}>
//         {defaultContent}
//       </AccordionItem>
//       <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3" indicator={<Plus />}>
//         {defaultContent}
//       </AccordionItem>
//     </Accordion>
//   );
// }

