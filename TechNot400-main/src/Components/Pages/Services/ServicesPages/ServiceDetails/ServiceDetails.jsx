import React from 'react';
import { useParams } from 'react-router-dom';
import { services_data } from '../../servicesData'; 
import ServiceDetailsHead from './ServiceDetailsPages/ServiceDetailsHead';
import ServiceDetailsProcess from './ServiceDetailsPages/ServiceDetailsProcess';
import ServiceDetailsTechnologies from './ServiceDetailsPages/ServiceDetailsTechnologies';
import ServiceDetailsBenifits from './ServiceDetailsPages/ServiceDetailsBenifits';
import ServiceDetailsFaq from './ServiceDetailsPages/ServiceDetailsFaq';
import Testimonial from '../../../../Testimonial/Testimonial';
import ServiceReachUs from './ServiceReachUs';
import ServiceKnowmore from './ServiceDetailsPages/ServiceKnowmore';


const ServiceDetails = () => {
  const { slug } = useParams();
  const service = services_data.find(service => service.slug === slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  // Destructure properties from the service object
  const { title, backgroundImage, summary, process, technologies, benifits, benifitHead, faqs, knowPlaces } = service;

  return (
    <>
      <ServiceDetailsHead
        backgroundImage={backgroundImage}
        summary={summary}
        title={title}
      />
      
      <ServiceDetailsProcess process={process}  />
      
      {title !== 'Digital Billing' && title !== 'Ideation & Consulting' && (
        <ServiceDetailsTechnologies technologies={technologies} />
      )}

      <ServiceDetailsBenifits
        benifits={benifits}
        benifitHead={benifitHead}
        title={title}
      />
      <ServiceKnowmore knowPlaces={knowPlaces} title={title}/>
      
      <Testimonial />
      <ServiceDetailsFaq faq={faqs} />
      <ServiceReachUs />
    </>
  );
};

export default ServiceDetails;
