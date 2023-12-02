import Heading from "../../../components/Heading";

const LatestUpdates = () => {
  const updates = [
    {
      id: 1,
      title: 'New Feature: Employee Performance Reports',
      description: 'Introducing a powerful feature to track and analyze employee performance. Get detailed reports to enhance your team management.',
      date: 'January 5, 2024',
      link: '/updates/performance-reports',
    },
    {
      id: 2,
      title: 'Upcoming Webinar: Effective Team Collaboration',
      description: 'Join us for an insightful webinar on fostering effective team collaboration in the workplace. Save the date and stay tuned for more details.',
      date: 'January 10, 2024',
      link: '/updates/webinar-collaboration',
    },
    // Add more updates as needed
  ];

  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto">
        <Heading>Latest Updates</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updates.map((update) => (
            <div key={update.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{update.title}</h3>
              <p className="text-gray-600 mb-4">{update.description}</p>
              <div className="flex items-center justify-between text-gray-500">
                <p className="text-sm">{update.date}</p>
                <a
                  href={update.link}
                  className="text-blue-500 hover:underline transition duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
