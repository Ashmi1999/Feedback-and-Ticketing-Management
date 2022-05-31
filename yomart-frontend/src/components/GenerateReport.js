import React, { useEffect, useState } from "react";
import generatePDF from "../services/reportGenerator";
import axios from "axios";
import CONSTANTS from "../services/constants";
import {Button} from "antd";

const GenerateReport = () => {

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getAllTickets();
  }, []);

  const getAllTickets = async () => {
    try {
      const response = await axios.get(`${CONSTANTS.HOST_NAME}/ticketmanage/view`);
      setTickets(response.data.tickets);
    } catch (err) {
      console.log("error");
    }
  };

  const reportTickets = tickets;
  console.log(reportTickets);
  return (
      <div>
        <div className="container mb-4 mt-4 p-3">
          <div className="row w-25">
                <Button
                    className="btn btn-success"
                    onClick={() => generatePDF(reportTickets)}
                >
                    Click To Generate Report
                </Button>
          </div>
        </div>
        {/*<TicketsComponent tickets={tickets} />*/}
      </div>
  );
};

export default GenerateReport;