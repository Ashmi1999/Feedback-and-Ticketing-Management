import "antd/dist/antd.css";

import {Button, Table, Modal, Input} from "antd";
import {useEffect, useState} from "react";
import {EditOutlined, DeleteOutlined, SearchOutlined} from "@ant-design/icons";
import axios from "axios";
import CONSTANTS from "../services/constants";

function App() {
    const [isEditing, setIsEditing] = useState(false);
    const [editingTicket, setEditingTicket] = useState(null);
    const [dataSource, setDataSource] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${CONSTANTS.HOST_NAME}/ticketmanage/view`);
            const tickets = response.data.tickets;
            var result = tickets.map(ticket => ({...ticket, key: ticket._id}));
            setDataSource(result);

        } catch (error) {
            console.log(error);
        }
    }

    const columns = [
        {
            key: "1",
            title: "ID",
            dataIndex: "_id",
        },
        {
            key: "2",
            title: "Category",
            dataIndex: "Category",
            filterDropdown: ({setSelectedKeys, selectedKeys, confirm}) => {
                return (<div>

               <Input
                        autoFocus
                        placeholder="Search"
                        value={selectedKeys[0]}
                        onChange={(e) => {
                            setSelectedKeys(e.target.value ? [e.target.value] : [])
                        }}

                        onPressEnter={() => {
                            confirm()
                        }}
                        onBlur={() => {
                            confirm();
                        }}
                    ></Input>
                    </div>
                );
            },
            filterIcon: () => {
                return <SearchOutlined/>;
            },
            onFilter: (value, record) => {
                return record.Category.toLowerCase().includes(value.toLowerCase())
            }
        },
        {
            key: "3",
            title: "First Name",
            dataIndex: "FirstName",
        },

        {
            key: "4",
            title: "Last Name",
            dataIndex: "LastName",
        },
        {
            key: "5",
            title: "Email",
            dataIndex: "Email",
        },

        {
            key: "6",
            title: "Phone",
            dataIndex: "Phone",
        },
        {
            key: "7",
            title: "Message",
            dataIndex: "Message",
        },

        {
            key: "8",
            title: "Actions",
            render: (record) => {
                return (
                    <>
                        <EditOutlined
                            onClick={() => {
                                onEditTicket(record);
                            }}
                        />
                        <DeleteOutlined
                            onClick={() => {
                                onDeleteTicket(record);
                            }}
                            style={{color: "red", marginLeft: 12}}
                        />
                    </>
                );
            },
        },
    ];

    const onDeleteTicket = (record) => {
        Modal.confirm({
            title: "Are you sure, you want to delete this ticket record?",
            okText: "Yes",
            okType: "danger",
            onOk: async () => {
                    try {
                        console.log(record);
                        const response = await axios.delete(`${CONSTANTS.HOST_NAME}/ticketmanage/delete/${record._id}`);
                        console.log(response);
                        //alert(response.data.status);
                        Modal.success(
                            {
                                title: "Success",
                                content: response.data.status,
                            }
                        );
                        setDataSource((pre) => {
                            return pre.filter((ticket) => ticket._id !== record._id);
                        });
                    } catch (e) {
                        console.log(e);

                    }
            },
        });
    };

    const handleUpdateTicket=async (record)=>{

        try{

            const response = await axios.put(`${CONSTANTS.HOST_NAME}/ticketmanage/update_ticket/${record._id}`, record);
            console.log(response);
            Modal.success(
                {
                    title: "Success",
                    content: response.data.status,
                }
            );
            setDataSource((pre) => {
                return pre.map((ticket) => {
                    if (ticket._id === editingTicket._id) {
                        return editingTicket;
                    } else {
                        return ticket;
                    }
                });
            });
        }catch (e) {
            console.log(e);
        }
    }

    const onEditTicket = (record) => {
        try{
            setIsEditing(true);
            setEditingTicket({...record});
        }catch (e) {
            alert(e);
        }
    };
    const resetEditing = () => {
        setIsEditing(false);
        setEditingTicket(null);
    };

    const handleViewTickets =()=> {
        window.location.reload(false);
    }

    return (
        <div class="newmain">
            <div className="h1">HERE TO HELP !!</div>
            <div className="a">Your feedback and enquiry is important to us,so we will endeavour to respond to youat our
                earliest.
            </div>
            <div className="p">Your feedback will help us to continously improve ourselves to make it better for you and
                other valued customers.
            </div>

            <div className="App1">
                <header className="App1-header">
                    <Button onClick={handleViewTickets}>View all Tickets</Button>
                    <Table columns={columns} dataSource={dataSource}></Table>
                    <Modal
                        title="Update Ticket"
                        visible={isEditing}
                        okText="Save"
                        onCancel={() => {
                            resetEditing();
                        }}
                        onOk={async() => {
                            console.log(editingTicket);
                            await handleUpdateTicket(editingTicket);
                            resetEditing();
                        }}
                    >
                        <Input
                            value={editingTicket?.Category}
                            onChange={(e) => {
                                setEditingTicket((pre) => {
                                    return {...pre, Category: e.target.value};
                                });
                            }}
                        />
                        <Input

                            value={editingTicket?.FirstName}
                            onChange={(e) => {
                                setEditingTicket((pre) => {
                                    return {...pre, FirstName: e.target.value};
                                });
                            }}
                        />
                        <Input
                            value={editingTicket?.LastName}
                            onChange={(e) => {
                                setEditingTicket((pre) => {
                                    return {...pre, LastName: e.target.value};
                                });
                            }}
                        />
                        <Input
                            value={editingTicket?.Email}
                            onChange={(e) => {
                                setEditingTicket((pre) => {
                                    return {...pre, Email: e.target.value};
                                });
                            }}
                        />
                        <Input
                            value={editingTicket?.Phone}
                            onChange={(e) => {
                                setEditingTicket((pre) => {
                                    return {...pre, Phone: e.target.value};
                                });
                            }}
                        />
                        <Input
                            value={editingTicket?.Message}
                            onChange={(e) => {
                                setEditingTicket((pre) => {
                                    return {...pre, Message: e.target.value};
                                });
                            }}
                        />
                    </Modal>
                </header>
            </div>
        </div>
    );
}

export default App;




































