import { Table, Tag, Space, Divider } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CONSTANTS from "../services/constants";

const columns = [
  // {
  //   title: "Order ID",
  //   dataIndex: "oId",
  //   render: (text) => <a>{text}</a>,
  // },
  {
    title: "Customer Name",
    dataIndex: "Name",
  },
  {
    title: "Email",
    dataIndex: "Email",
  },
  {
    title: "Category",
    dataIndex: "Category",
  },
  {
    title: "Phone Number",
    dataIndex: "Phone",
  },
  {
    title: "Message",
    dataIndex: "Message",
  },
  // {
  //   title: "",
  //   render: (record) => (
  //     <Link to={`/order-edit/${record._id}`}>
  //       <button style={{ background: "green", color: "white" }}>Edit</button>
  //     </Link>
  //   ),
  // },
];

export default () => {
  const [data, setData] = useState(null);

  useEffect( () => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${CONSTANTS.HOST_NAME}/ticketmanage/view`);
      const tickets = response.data.tickets;
      const result = tickets.map(ticket => ({"Name": ticket.FirstName+" "+ticket.LastName,...ticket, key: ticket._id}));
      setData(result);

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    <div className="container8">
      <center>
        <Divider />
        <h1 className="text4">Ticket Details</h1>
        <Divider />
      </center>
      <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};
