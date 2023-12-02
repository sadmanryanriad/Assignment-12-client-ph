import Heading from "../../../components/Heading";
import ServiceCard from "./ServiceCard";


const services = [
  {
    id: 1,
    title: 'Employee Information Management',
    image: 'https://i.ibb.co/J3hJ5M4/startup-849804-640.jpg',
  },
  {
    id: 2,
    title: 'HR Operations Automation',
    image: 'https://i.ibb.co/BP0SLF5/calculator-385506-640.jpg',
  },
  {
    id: 3,
    title: 'Training and Development',
    image: 'https://i.ibb.co/4jpdQ28/laptop-1478822-640.jpg',
  },
  {
    id: 4,
    title: 'Performance Appraisal Systems',
    image: 'https://i.ibb.co/VBn3b91/laptop-3196481-640.jpg',
  },
  {
    id: 5,
    title: 'Employee Benefits Administration',
    image: 'https://i.ibb.co/wK3VZ8t/meeting-2284501-640.jpg',
  },
  {
    id: 6,
    title: 'Attendance and Leave Management',
    image: 'https://i.ibb.co/RNb6kSn/job-5382501-640.jpg',
  },
  {
    id: 7,
    title: 'Recruitment and Onboarding',
    image: 'https://i.ibb.co/TtFZbdC/office-594132-640.jpg',
  },
  {
    id: 8,
    title: 'Employee Engagement Programs',
    image: 'https://i.ibb.co/Qj49xmM/digital-marketing-1433427-640.jpg',
  },
];





  const Services = () => {
    return (
      <div id="services" className="max-w-7xl mx-auto px-3 pt-16 pb-16 md:pt-24">
        <Heading>Services</Heading>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              image={service.image}
            />
          ))}
        </div>
      </div>
    );
  };
  
export default Services;