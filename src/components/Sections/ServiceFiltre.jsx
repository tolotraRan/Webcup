import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardPay from '../Cards/CardPay';
import { useParams } from 'react-router-dom';
import TopNavbar from '../Nav/TopNavbarConnectedRdv';
import styled from "styled-components";

export default function ServiceFiltre() {
  const [filteredServices, setFilteredServices] = useState([]);
  const { nomservice } = useParams();

  useEffect(() => {
    async function fetchFilteredServices() {
      try {
        const response = await axios.get(`http://localhost:8080/api/services/filter?nomservice=${nomservice}`);
        setFilteredServices(response.data);
      } catch (error) {
        console.error('Error fetching filtered services:', error);
      }
    }
    fetchFilteredServices();
  }, [nomservice]);

  return (
    <Wrapper>
      <TopNavbar />
      <div className="container">
        <h1>{nomservice}</h1>
        <CardContainer className="row textCenter">
          {filteredServices.map((service, index) => (
            <CardWrapper key={index} className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <CardPay header={service.nomservice} title={service.nom} tag={service.prix} text={service.descriptionservice}/>
            </CardWrapper>
          ))}
        </CardContainer>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
`;

const CardWrapper = styled.div`
  flex: 0 0 calc(33.333% - 30px);
  margin: 15px;
  width: 600px;
  height: 400px;
`;
