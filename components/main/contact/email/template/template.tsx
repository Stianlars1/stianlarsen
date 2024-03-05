import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { renderToStaticMarkup } from "react-dom/server";

interface EmailFromContactFormTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailFromContactFormTemplate = ({
  name,
  email,
  message,
}: EmailFromContactFormTemplateProps): string => {
  const imageSrc = "";
  return renderToStaticMarkup(
    <Html>
      <Head />
      <Preview>‼️ Melding fra kontaktskjema </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Link href="https://www.stianlarsen.com">
              <Img width={114} src={imageSrc} alt="Image of Stian" />
            </Link>
          </Section>
          <Section style={sectionsBorders}>
            <Row>
              <Column style={sectionBorder} />
              <Column style={sectionCenter} />
              <Column style={sectionBorder} />
            </Row>
          </Section>
          <Section style={content}>
            <Text style={paragraph}>Hei Stian,</Text>

            <Text style={paragraph}>
              Det er kommet inn en melding fra kontaktskjemaet på nettsiden!
            </Text>
            <Text style={paragraph}>Avsender: {name}</Text>
            <Text style={paragraph}>Epost: {email}</Text>
          </Section>
          <Section style={content}>
            <Text style={paragraph}>Melding: </Text>
            <Text style={paragraph}>
              <p dangerouslySetInnerHTML={{ __html: message }} />
            </Text>
          </Section>
          <Section style={content}>
            <Text style={paragraph}>
              ‼️ Husk å svare opp personen så fort som mulig ‼️
            </Text>
          </Section>
        </Container>

        <Section style={footer}>
          <Row>
            <Text style={{ textAlign: "center", color: "#706a7b" }}>
              © {new Date().getFullYear()} Stian Larsen, All Rights Reserved
            </Text>
          </Row>
        </Section>
      </Body>
    </Html>,
  );
};

const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";

const main = {
  backgroundColor: "#efeef1",
  fontFamily,
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const container = {
  maxWidth: "580px",
  margin: "30px auto",
  backgroundColor: "#ffffff",
};

const footer = {
  maxWidth: "580px",
  margin: "0 auto",
};

const content = {
  padding: "5px 20px 10px 20px",
};

const logo = {
  display: "flex",
  justifyContent: "center",
  alingItems: "center",
  padding: 30,
};

const sectionsBorders = {
  width: "100%",
  display: "flex",
};

const sectionBorder = {
  borderBottom: "1px solid rgb(238,238,238)",
  width: "249px",
};

const sectionCenter = {
  borderBottom: "1px solid rgb(145,71,255)",
  width: "102px",
};

const link = {
  textDecoration: "underline",
};

// export const template = "
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Contact Form Message</title>
//   <style>
//     body { background-color: #efeef1; font-family: HelveticaNeue, Helvetica, Arial, sans-serif; }
//     .container { max-width: 580px; margin: 30px auto; background-color: #ffffff; }
//     .logo { display: flex; justify-content: center; align-items: center; padding: 30px; }
//     .content { padding: 5px 20px 10px 20px; }
//     .paragraph { line-height: 1.5; font-size: 14px; }
//     .footer { max-width: 580px; margin: 0 auto; text-align: center; color: #706a7b; }
//     .sectionBorder { border-bottom: 1px solid rgb(238,238,238); width: 249px; }
//     .sectionCenter { border-bottom: 1px solid rgb(145,71,255); width: 102px; }
//   </style>
// </head>
// <body>
//   <div class="container">
//     <div class="logo">
//       <a href="https://www.stianlarsen.com">
//         <img width="114" src="" alt="Image of Stian" />
//       </a>
//     </div>
//     <div style="width: 100%; display: flex;">
//       <div class="sectionBorder"></div>
//       <div class="sectionCenter"></div>
//       <div class="sectionBorder"></div>
//     </div>
//     <div class="content">
//       <p class="paragraph">Hei Stian,</p>
//       <p class="paragraph">Det er kommet inn en melding fra kontaktskjemaet på nettsiden!</p>
//       <p class="paragraph">Avsender: {{name}}</p>
//       <p class="paragraph">Epost: {{email}}</p>
//     </div>
//     <div class="content">
//       <p class="paragraph">Melding: </p>
//       <p class="paragraph">{{message}}</p>
//     </div>
//     <div class="content">
//       <p class="paragraph">‼️ Husk å svare opp personen så fort som mulig ‼️</p>
//     </div>
//   </div>
//   <div class="footer">
//     <p>© {{year}} Stian Larsen, All Rights Reserved</p>
//   </div>
// </body>
// </html>

// "
