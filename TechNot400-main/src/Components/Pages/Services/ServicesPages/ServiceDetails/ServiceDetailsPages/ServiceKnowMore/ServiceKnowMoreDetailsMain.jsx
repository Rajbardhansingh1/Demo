import React from 'react';
import { useParams } from 'react-router-dom';
import { services_data } from '../../../../servicesData';
import ServiceKnowMoreDetailesHead from './ServiceKnowMoreDetailsPages/ServiceKnowMoreDetailesHead';
import ServiceKnowMoreDetailsPictures from './ServiceKnowMoreDetailsPages/ServiceKnowMoreDetailsPictures';
import ServiceKnowMoreDetailsAboutplace from './ServiceKnowMoreDetailsPages/ServiceKnowMoreDetailsAboutplace';

const ServiceKnowMoreDetailsMain = () => {
  const { slug, place } = useParams();
  console.log('Slug:', slug);
console.log('Available Services:', services_data);

  // Find the service based on slug
  const service = services_data.find(service => service.slug.toLowerCase() === slug.toLowerCase());
  console.log('Selected Service:', service);

  // Handle case where service is not found
  if (!service) {
    return <div>Service not found</div>;
  }

  // Find the place data within the service
  const placeData = service.knowPlaces.flatMap(knowPlacesItem => knowPlacesItem.knowPlacesData)
  .find(placeItem => placeItem.place.toLowerCase() === place.toLowerCase());

  // Handle case where place data is not found
  if (!placeData) {
    return <div>Place not found</div>;
  }

  return (
    <>
      <ServiceKnowMoreDetailesHead
        heading={placeData.details.heading}
        description={placeData.details.description}
        additionalInfo={placeData.details.additionalInfo}
      />
      <ServiceKnowMoreDetailsPictures/>
      <ServiceKnowMoreDetailsAboutplace/>
    </>
  );
};

export default ServiceKnowMoreDetailsMain;
