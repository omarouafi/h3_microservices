import { useEffect, useState } from 'react';
import backendSDK from '../BackendSDK';

const Home = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch(backendSDK.url);
        const data = await response.json();
        setCustomers(data['Customers info']);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };
    
    fetchCustomers();
  }, []);

  return (
    <div>
      <h1>Customer List</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.customerid}>
            <a href={`/customer/${customer.customerid}`}>
              {customer.companyname} ({customer.contactname})
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
