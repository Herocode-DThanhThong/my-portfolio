import React from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';
import { contactList } from '@/data';
type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      <div className="">
        <h1 className="text-txtPrimary font-bold text-xl">Contact me</h1>
        <div className="my-4 flex items-center gap-2">
          <BiLogoGmail
            style={{
              fontSize: '24px',
              color: '#e60505',
            }}
          />
          <p className="text-sky-600">{contactList.gmail.title}</p>
        </div>
        <div className="my-4 flex items-center gap-2 hover:opacity-80 transition-all ease-in-out ">
          <AiFillLinkedin
            style={{
              fontSize: '24px',
              color: '#055be6',
            }}
          />
          <Link
            className="text-sky-600 block hover:border-b hover:border-b-[#0284c7]"
            href={contactList.linkedin.url}
            target="_blank"
          >
            {contactList.linkedin.title}
          </Link>
        </div>
        <div className="my-4 flex items-center gap-2 hover:opacity-80 transition-all ease-in-out">
          <AiFillGithub
            style={{
              fontSize: '24px',
              color: '#000',
            }}
          />
          <Link
            className="text-sky-600 block hover:border-b hover:border-b-[#0284c7]"
            href={contactList.github.url}
            target="_blank"
          >
            {contactList.github.title}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;
