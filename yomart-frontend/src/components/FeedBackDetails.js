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
    title: "Phone Number",
    dataIndex: "Phone",
  },
  {
    title: "FeedBack",
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
      const response = await axios.get(`${CONSTANTS.HOST_NAME}/feedback/view`);
      const feedbacks = response.data.feedbacks;
      const result = feedbacks.map(feedback => ({"Name": feedback.FirstName+" "+feedback.LastName,...feedback, key: feedback._id}));
      setData(result);

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    <div className="container7">
      <center>
        <Divider />
        <h1 className="text3">FeedBack Details</h1>
        <Divider />
      </center>
      <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};
