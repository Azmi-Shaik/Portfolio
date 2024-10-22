import React from 'react';
import styled from 'styled-components';
import { Email, Phone } from '@mui/icons-material'; // Import icons

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px; /* Limit max width */
  padding: 32px;
  background-color: ${({ theme }) => theme.card}; /* Background color */
  border-radius: 16px; /* Rounded corners */
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px; /* Shadow for depth */
  margin-top: 28px; /* Space above card */
  margin-bottom: 28px; /* Space below card */
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px; /* Space below title */
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;
  padding: 10px; /* Space inside each contact detail */
  background-color: rgba(0, 0, 0, 0.05); /* Light background for contrast */
  border-radius: 8px; /* Rounded corners for details */
  transition: background-color 0.3s; /* Smooth transition for hover effect */

  &:hover {
    background-color: rgba(0, 0, 0, 0.1); /* Darker background on hover */
  }
`;

const Icon = styled.div`
  margin-right: 8px;
`;

const Contact = () => {
  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <ContactDetail>
          <Icon><Email /></Icon>
          <a href="mailto:shaikazmi31@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
            shaikazmi31@gmail.com
          </a>
        </ContactDetail>
        <ContactDetail>
          <Icon><Phone /></Icon>
          <a href="tel:+917093621847" style={{ textDecoration: 'none', color: 'inherit' }}>
            7093621847
          </a>
        </ContactDetail>
      </Wrapper>
    </Container>
  );
};

export default Contact;
