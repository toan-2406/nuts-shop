import React, { useRef, useEffect, useState } from "react";
import Section, { SectionTitle } from "../components/Section";
import ReactMarkdown from "react-markdown";
import Helmet from "../components/Helmet";
export const Contact = () => {
  const markdown = `
### Mọi chi tiết xin liên hệ:

Shopee   : [https://shopee.vn/nuts.4u](https://shopee.vn/nuts.4u)

Gmail: <nuts.4U29@gmail.com>

Hotline: 0868326207

Fanpage : [https://www.facebook.com/profile.php?id=100090442660780](https://www.facebook.com/profile.php?id=100090442660780)

Website  : [https://nuts-shop-rose.vercel.app/](https://nuts-shop-rose.vercel.app/)`;
  return (
    <Helmet title="Liên hệ">
      <Section>
        <SectionTitle>Liên Hệ</SectionTitle>
        <div className="post-container">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </Section>
    </Helmet>
  );
};

export default Contact;
