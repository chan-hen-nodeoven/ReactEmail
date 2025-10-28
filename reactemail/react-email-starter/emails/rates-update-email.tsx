import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Section,
  Text,
  Font,
  Preview,
} from '@react-email/components';
import * as React from 'react';

// Sample data for testing
const sampleRates = {
  treasury5y: '4.25%',
  treasury7y: '4.35%',
  treasury10y: '4.45%',
  sofr1MoTerm: '5.05%',
  sofr5y: '4.75%',
  sofr7y: '4.85%',
  sofr10y: '4.95%',
  fhlbBoston5y: '4.65%',
  fhlbBoston10y: '4.85%',
  usPrimeRate: '8.50%',
  cmb5y: '4.55%',
  cmb10y: '4.75%',
  corra1MoTerm: '5.15%',
  cad5y: '4.85%',
  cad7y: '4.95%',
  cad10y: '5.05%',
  sp500: '4,400.25',
  dowJones: '34,500.75',
};

interface RatesData {
  treasury5y: string;
  treasury7y: string;
  treasury10y: string;
  sofr1MoTerm: string;
  sofr5y: string;
  sofr7y: string;
  sofr10y: string;
  fhlbBoston5y: string;
  fhlbBoston10y: string;
  usPrimeRate: string;
  cmb5y: string;
  cmb10y: string;
  corra1MoTerm: string;
  cad5y: string;
  cad7y: string;
  cad10y: string;
  sp500: string;
  dowJones: string;
}

interface RatesUpdateEmailProps {
  rates: RatesData;
}

export default function RatesUpdateEmail({
  rates = sampleRates,
}: RatesUpdateEmailProps) {
  const date = new Date().toLocaleDateString('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  return (
    <Html>
      <Head>
        <title>Rates Update</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <Font
          fontFamily="Old Standard TT"
          fallbackFontFamily="serif"
          webFont={{
            url: 'https://fonts.gstatic.com/s/oldstandardtt/v13/MwQubh3o1vLImiwAVvYawgcf2eVWEX-dTFxeb80.woff2',
            format: 'woff2',
          }}
        />
        <Font
          fontFamily="Open Sans"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: 'https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2',
            format: 'woff2',
          }}
        />
      </Head>
      <Body
        style={{
          margin: 0,
          padding: 0,
          // backgroundColor: '#a48b52',
          fontFamily: "'Open Sans', Arial, sans-serif",
          lineHeight: 1.6,
        }}
      >
        <Container
          style={{
            // backgroundColor: '#a48b52',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          <Section style={{ padding: '20px 0' }}>
            <Container
              style={{
                maxWidth: '600px',
                width: '100%',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
            >
              {/* Header */}
              <Section
                style={{
                  backgroundColor: '#020101',
                  borderRadius: '8px 8px 0 0',
                  textAlign: 'center', // ✅ Centers the image horizontally
                  paddingTop: '15px',
                }}
              >
                <Img
                  src="https://credit.largocapital.com/largo-logo-white.png"
                  alt="Largo Logo"
                  width="200"
                  style={{
                    display: 'inline-block',
                    height: 'auto',
                  }}
                />
              </Section>

              {/* Content */}
              <Section style={{ padding: '40px 40px 20px 40px' }}>
                <Text
                  style={{
                    margin: 0,
                    color: '#a48b52',
                    fontFamily: "'Open Sans', serif",
                    fontSize: '28px',
                    fontWeight: 600,
                    letterSpacing: '5px',
                  }}
                >
                  RATES UPDATE
                </Text>

                <table
                  width="100%"
                  cellPadding="0"
                  cellSpacing="0"
                  style={{
                    borderCollapse: 'collapse',
                    margin: '30px 0',
                    border: '2px solid #020101',
                    borderRadius: '6px',
                    overflow: 'hidden',
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        colSpan={2}
                        style={{
                          backgroundColor: '#a48b52',
                          color: '#ffffff',
                          padding: '15px',
                          textAlign: 'left',
                          fontFamily: "'Open Sans', Arial, sans-serif",
                          fontWeight: 500,
                          fontSize: '14px',
                          borderBottom: '1px solid #a48b52',
                        }}
                      >
                        {date}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ backgroundColor: '#f9f8f5' }}>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          color: '#020101',
                          fontSize: '14px',
                        }}
                      >
                        5 Year
                      </td>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          textAlign: 'center',
                          color: '#a48b52',
                          fontSize: '14px',
                          fontWeight: 600,
                        }}
                      >
                        {rates.treasury5y}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#ffffff' }}>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          color: '#020101',
                          fontSize: '14px',
                        }}
                      >
                        7 Year
                      </td>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          textAlign: 'center',
                          color: '#a48b52',
                          fontSize: '14px',
                          fontWeight: 600,
                        }}
                      >
                        {rates.treasury7y}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#f9f8f5' }}>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          color: '#020101',
                          fontSize: '14px',
                        }}
                      >
                        10 Year
                      </td>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          textAlign: 'center',
                          color: '#a48b52',
                          fontSize: '14px',
                          fontWeight: 600,
                        }}
                      >
                        {rates.treasury10y}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#ffffff' }}>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          color: '#020101',
                          fontSize: '14px',
                        }}
                      >
                        1 Month SOFR
                      </td>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          textAlign: 'center',
                          color: '#a48b52',
                          fontSize: '14px',
                          fontWeight: 600,
                        }}
                      >
                        {rates.sofr1MoTerm}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#f9f8f5' }}>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          color: '#020101',
                          fontSize: '14px',
                        }}
                      >
                        5 Year SOFR
                      </td>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          textAlign: 'center',
                          color: '#a48b52',
                          fontSize: '14px',
                          fontWeight: 600,
                        }}
                      >
                        {rates.sofr5y}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#ffffff' }}>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          color: '#020101',
                          fontSize: '14px',
                        }}
                      >
                        7 Year SOFR
                      </td>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          textAlign: 'center',
                          color: '#a48b52',
                          fontSize: '14px',
                          fontWeight: 600,
                        }}
                      >
                        {rates.sofr7y}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#f9f8f5' }}>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          color: '#020101',
                          fontSize: '14px',
                        }}
                      >
                        10 Year SOFR
                      </td>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          textAlign: 'center',
                          color: '#a48b52',
                          fontSize: '14px',
                          fontWeight: 600,
                        }}
                      >
                        {rates.sofr10y}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#ffffff' }}>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          color: '#020101',
                          fontSize: '14px',
                        }}
                      >
                        FHLB Boston 5 Year
                      </td>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          textAlign: 'center',
                          color: '#a48b52',
                          fontSize: '14px',
                          fontWeight: 600,
                        }}
                      >
                        {rates.fhlbBoston5y}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#f9f8f5' }}>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          color: '#020101',
                          fontSize: '14px',
                        }}
                      >
                        FHLB Boston 10 Year
                      </td>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          textAlign: 'center',
                          color: '#a48b52',
                          fontSize: '14px',
                          fontWeight: 600,
                        }}
                      >
                        {rates.fhlbBoston10y}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#ffffff' }}>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          color: '#020101',
                          fontSize: '14px',
                        }}
                      >
                        US Prime Rate
                      </td>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          textAlign: 'center',
                          color: '#a48b52',
                          fontSize: '14px',
                          fontWeight: 600,
                        }}
                      >
                        {rates.usPrimeRate}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#f9f8f5' }}>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          color: '#020101',
                          fontSize: '14px',
                        }}
                      >
                        CMB 5 Year
                      </td>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          textAlign: 'center',
                          color: '#a48b52',
                          fontSize: '14px',
                          fontWeight: 600,
                        }}
                      >
                        {rates.cmb5y}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#ffffff' }}>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          color: '#020101',
                          fontSize: '14px',
                        }}
                      >
                        CMB 10 Year
                      </td>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          textAlign: 'center',
                          color: '#a48b52',
                          fontSize: '14px',
                          fontWeight: 600,
                        }}
                      >
                        {rates.cmb10y}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#f9f8f5' }}>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          color: '#020101',
                          fontSize: '14px',
                        }}
                      >
                        CORRA - 1 Mo Term
                      </td>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          textAlign: 'center',
                          color: '#a48b52',
                          fontSize: '14px',
                          fontWeight: 600,
                        }}
                      >
                        {rates.corra1MoTerm}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#ffffff' }}>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          color: '#020101',
                          fontSize: '14px',
                        }}
                      >
                        CAD 5 Year
                      </td>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          textAlign: 'center',
                          color: '#a48b52',
                          fontSize: '14px',
                          fontWeight: 600,
                        }}
                      >
                        {rates.cad5y}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#f9f8f5' }}>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          color: '#020101',
                          fontSize: '14px',
                        }}
                      >
                        CAD 7 Year
                      </td>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          textAlign: 'center',
                          color: '#a48b52',
                          fontSize: '14px',
                          fontWeight: 600,
                        }}
                      >
                        {rates.cad7y}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#ffffff' }}>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          color: '#020101',
                          fontSize: '14px',
                        }}
                      >
                        CAD 10 Year
                      </td>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          textAlign: 'center',
                          color: '#a48b52',
                          fontSize: '14px',
                          fontWeight: 600,
                        }}
                      >
                        {rates.cad10y}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#f9f8f5' }}>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          color: '#020101',
                          fontSize: '14px',
                        }}
                      >
                        S&P 500
                      </td>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          textAlign: 'center',
                          color: '#a48b52',
                          fontSize: '14px',
                          fontWeight: 600,
                        }}
                      >
                        {rates.sp500}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#ffffff' }}>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          color: '#020101',
                          fontSize: '14px',
                        }}
                      >
                        Dow Jones
                      </td>
                      <td
                        style={{
                          padding: '15px',
                          borderBottom: '1px solid #d4c49c',
                          textAlign: 'center',
                          color: '#a48b52',
                          fontSize: '14px',
                          fontWeight: 600,
                        }}
                      >
                        {rates.dowJones}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <TeamMembersEmail />
              </Section>

              {/* Footer */}
              <Section
                style={{
                  backgroundColor: '#020101',
                  padding: '20px',
                  textAlign: 'center',
                  borderRadius: '0 0 8px 8px',
                }}
              >
                <Text
                  style={{
                    margin: '10px 0 15px 0',
                    color: '#ffffff',
                    fontSize: '14px',
                    fontWeight: 500,
                  }}
                >
                  © Largo Capital. All rights reserved
                </Text>
              </Section>
            </Container>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

interface TeamMember {
  name: string;
  title: string;
  cellphone: string;
  email: string;
  linkedIn: string;
  imageUrl: string;
}

interface TeamMembersEmailProps {
  members?: TeamMember[];
}

const TeamMembersEmail = ({
  members = [
    {
      name: 'Gary Coscia',
      title: 'FOUNDER & CEO',
      cellphone: '716-204-2211',
      email: 'gcoscia@largocapital.com',
      linkedIn: 'https://www.linkedin.com/in/gary-j-coscia-95656513/',
      imageUrl:
        'https://largocapital.com/wp-content/uploads/2017/06/Gary-Coscia-2025-1582x2048.png',
    },
    {
      name: 'Kevin Coscia',
      title: 'PRINCIPAL & GENERAL COUNSEL',
      cellphone: '(212) 203-3431',
      email: 'kcoscia@largocapital.com',
      linkedIn: 'https://www.linkedin.com/in/kevin-coscia-b34a2718b/',
      imageUrl:
        'https://largocapital.com/wp-content/uploads/2017/06/Kevin-Coscia-2025-WEB-1-1582x2048.jpg',
    },
  ],
}: TeamMembersEmailProps) => {
  return (
    <Html>
      <Head />
      <Body
        style={{
          backgroundColor: '#f6f6f6',
          fontFamily:
            '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
          padding: '5px 0',
          borderLeft: '4px solid #a48b52',
        }}
      >
        <Container style={container}>
          <Section style={cardContainer}>
            <table style={tableStyle}>
              <tbody>
                <tr>
                  {members.map((member, index) => (
                    <td
                      key={index}
                      style={cardCell}
                    >
                      <table style={cardTable}>
                        <tbody>
                          <tr>
                            <td style={imageCell}>
                              <Img
                                src={member.imageUrl}
                                alt={member.name}
                                style={image}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td style={contentCell}>
                              <Text style={name}>{member.name}</Text>
                              <Text style={title}>{member.title}</Text>
                              <table style={iconsContainer}>
                                <tbody>
                                  <tr>
                                    <td style={iconCell}>
                                      <a
                                        href={`mailto:${member.email}`}
                                        style={iconLink}
                                      >
                                        <svg
                                          width="20"
                                          height="20"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                                            stroke="#666666"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </a>
                                    </td>
                                    <td style={iconCell}>
                                      <a
                                        href={`tel:${member.cellphone}`}
                                        style={iconLink}
                                      >
                                        <svg
                                          width="20"
                                          height="20"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
                                            stroke="#666666"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </a>
                                    </td>
                                    <td style={iconCell}>
                                      <a
                                        href={member.linkedIn}
                                        style={iconLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <svg
                                          width="20"
                                          height="20"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                                            stroke="#666666"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M6 9H2V21H6V9Z"
                                            stroke="#666666"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                                            stroke="#666666"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const container = {
  backgroundColor: 'transparent',
  margin: '0 auto',
  padding: '20px',
  maxWidth: '600px',
};

const cardContainer = {
  margin: '0 auto',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse' as const,
};

const cardCell = {
  width: '50%',
  padding: '10px',
  verticalAlign: 'top' as const,
};

const cardTable = {
  width: '100%',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};

const imageCell = {
  padding: '0',
};

const image = {
  width: '100%',
  height: 'auto',
  display: 'block',
  backgroundColor: '#4a4a4a',
};

const contentCell = {
  padding: '24px',
  position: 'relative' as const,
};

const name = {
  fontSize: '28px',
  fontWeight: '700',
  color: '#1a1a1a',
  margin: '0 0 8px 0',
  fontFamily: 'Georgia, serif',
  lineHeight: '1.2',
};

const title = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#b8a574',
  margin: '0 0 8px 0',
  letterSpacing: '0.5px',
  textTransform: 'uppercase' as const,
  height: '50px',
  lineHeight: '1.4',
};
const iconsContainer = {
  width: 'auto',
  marginTop: '8px',
};

const iconCell = {
  padding: '0 8px 0 0',
};

const iconLink = {
  display: 'inline-block',
  textDecoration: 'none',
};

const buttonContainer = {
  position: 'absolute' as const,
  bottom: '24px',
  right: '24px',
};

const plusButton = {
  width: '56px',
  height: '56px',
  borderRadius: '50%',
  backgroundColor: '#3a3a3a',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const plusIcon = {
  fontSize: '32px',
  color: '#ffffff',
  margin: '0',
  lineHeight: '1',
  fontWeight: '300',
};
