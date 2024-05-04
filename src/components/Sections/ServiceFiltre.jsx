import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardPay from '../Cards/CardPay';
import { useParams } from 'react-router-dom';
import TopNavbar from '../Nav/TopNavbarConnectedRdv';

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
    <div>
        <TopNavbar />
      <h1>Filtered Services for {nomservice}</h1>
      {filteredServices.map((service, index) => (
        <CardPay key={index} header={service.nomservice} title={service.nomservice} text={service.description} />
      ))}
    </div>
  );
}
