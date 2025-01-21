import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import backendSDK from '../../BackendSDK';

const CustomerDetail = () => {
  const { query } = useRouter();
  const { customer_id } = query;
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    if (!customer_id) return;

    const fetchCustomer = async () => {
      try {
        const response = await fetch(`${backendSDK.url}/${customer_id}`);
        const data = await response.json();
        setCustomer(data['Customer info'][0]);
      } catch (error) {
        console.error('Error fetching customer:', error);
      }
    };

    fetchCustomer();
  }, [customer_id]);

  if (!customer) return <p>Loading...</p>;

  return (
    <div>
      <h1>Customer Details</h1>
      <p><strong>Customer ID:</strong> {customer.customerid}</p>
      <p><strong>Company Name:</strong> {customer.companyname}</p>
      <p><strong>Contact Name:</strong> {customer.contactname}</p>
      <a href="/">Back to Customer List</a>
    </div>
  );
};

export default CustomerDetail;
