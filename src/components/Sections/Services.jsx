import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "../Cards/Card";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await axios.get("http://localhost:8080/api/services"); 
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    }
    fetchServices();
  }, []);

  // Filtrer les services pour n'afficher que le premier service pour chaque nom de service unique
  const uniqueServices = services.filter((service, index, self) =>
    index === self.findIndex((s) => s.nomservice === service.nomservice)
  );

  return (
    <Wrapper id="services">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Services</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
            <br />
            <br />
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            {uniqueServices.map((service, index) => (
              <Card header={service.nomservice} title={service.nomservice} text={service.description} />
                
            ))}
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
