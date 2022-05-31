import { Button, Tabs } from "antd";
import { Link } from "react-router-dom";
// import CustomTabPanesDelivery from "./CusromeTabPanesDelivery";
// import DeliveryStaff from "./DeliveryStaff";
import FeedBackDetails from "./FeedBackDetails";
import TicketDetails from "./TicketDetails";
import GenerateReport from "./GenerateReport";


const { TabPane } = Tabs;

const CustomTabPanes = () => (
  <center>
    <Tabs defaultActiveKey="1">
      <TabPane tab="FeedBack Details" key="1">
        <FeedBackDetails />
      </TabPane>
      <TabPane tab="Ticket Details" key="2">
        <TicketDetails />
      </TabPane>
      <TabPane tab="Export Report" key="3">
        <GenerateReport/></TabPane>
    </Tabs>
  </center>
);

export default CustomTabPanes;
