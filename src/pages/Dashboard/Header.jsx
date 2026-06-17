import React, { useState,useEffect,useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { HiMenuAlt1 } from "react-icons/hi";
import axiosInstance from "../../api/axiosInstance";
import { useQuery, useQueryClient } from "react-query"; // Import React Query hooks
import { useDispatch } from "react-redux";
import { clearScholarships } from "../../toolkit/scholarshipReducer";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import { clearFormData } from "../../toolkit/formReducer";
import { clearJobData } from "../../toolkit/jobReducer";
import { PiUser } from "react-icons/pi";
import { IoNotificationsOutline } from "react-icons/io5";
import  openmojiSmile  from "../../assets/memoji.webp";
import {notifications} from '../../hooks/useNotifications';
import { ToastContainer, toast  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const MyHeader = ({ setShowContent }) => {
	const history = useHistory();
	const queryClient = useQueryClient(); // Get the queryClient instance
	const [isPushMenuVisible, setPushMenuVisible] = useState(false);
	const dispatch = useDispatch();
	const [data,setData] = useState([]);
	const [notify, setNotify] = useState([{}]);
	const [clickedIds, setClickedIds] = useState([]);

	
	const prevLengthRef = useRef(0);

	const deleteMessage = (ID) => {
		const newArray = notify.filter((data) => data._id != ID);
		setNotify(newArray);
		return newArray;
	};

	const togglePushMenu = () => {
		setPushMenuVisible(!isPushMenuVisible);
	};

	const info = JSON.parse(localStorage.getItem("userData"));
	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		}
	};

	// async function fetchNotifications() {
	// 	try {
	// 		const res = await axios.get(
	// 			"http://localhost:4000/api/v1/user/notifications",
	// 			config
	// 		);
	// 		setData(res.data.data);
	// 		console.log(res.data.data);
	// 	} catch (error) {
	// 		throw new Error(error.message || "Failed to fetch notifications");
	// 	}
	// }

	// useEffect(() => {
	// 	fetchNotifications()
	// },[]);

	const { _data, refetch } = useQuery(
		"notifications",
		async () => {
		  const res = await axios.get(
			"https://kodo-backend.kodoscholarship.com/api/v1/user/notifications",
			config
		  );
		  setData(res.data.data);
		  return res.data.data;
		},
		{
		  refetchInterval: 2500 // Poll every 10 seconds
		}
	  );

	const HandleClick = async (id) => {
		try {
			const res = await axios.patch(
				`https://kodo-backend.kodoscholarship.com/api/v1/user/notifications/${id}`,
				config
			);
			
			setClickedIds([...clickedIds, id]);

			queryClient.setQueryData("notifications", (oldData) =>
				oldData?.filter((notif) => notif._id !== id)
			);

			console.log(res);
		} catch (error) {
			throw new Error(error.message || "Failed to fetch notifications");
		}
	};

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.setItem("modal2Open", "true");
		localStorage.removeItem("userData");
		localStorage.removeItem("refer");
		dispatch(clearFormData());
		dispatch(clearJobData());
		queryClient.clear();
		dispatch(clearScholarships());
		history.push("/login");
	};

	const items = [
		{
			label: (
				<div onClick={() => setShowContent(3)}>
					<Link to="/scholars">
						<div align="center" style={{ display: "flex" }}>
							<UserOutlined style={{ marginRight: "4px", color: "black" }} />
							<span style={{ color: "black" }}>Profile </span>
						</div>
					</Link>
				</div>
			),
			key: "0"
		},
		{
			label: (
				<div onClick={handleLogout}>
					<div style={{ display: "flex" }}>
						<LogoutOutlined style={{ marginRight: "4px" }} />
						<span>Log out</span>
					</div>
				</div>
			),
			key: "1"
		}
	];

	useEffect(() => {
		if (data?.length > prevLengthRef.current) {
		  // Show toast or play sound here
		  toast("You have a new notification!");
		}
		prevLengthRef.current = data?.length;
	  }, [data]);


	return (
		<div>
			  <ToastContainer />
			<nav className={`main-header navbar fixed-top navbar-expand navbar-white navbar-light  ${isPushMenuVisible ? "sidebar-open" : ""}`}>
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link to="#" className="nav-link" data-widget="pushmenu">
							<HiMenuAlt1 style={{ color: "#1d2855", width: "3rem", height: "2rem" }} />
						</Link>
					</li>
				</ul>
				<ul className="navbar-nav ml-auto ">
					<li className="">
						<Link className="nav-link" data-toggle="dropdown" to="#">
							<IoNotificationsOutline size={25} style={{ color: '#1d2855' }} />
							<span className="badge badge-danger navbar-badge">{data?.length || 0}</span>
						</Link>
						<div style={{ cursor: "pointer", height: 250, overflowY: 'auto', width: "20rem", backgroundColor: "#F4F6F9", padding: 10 }} className="dropdown-menu dropdown-menu-md dropdown-menu-right">
							<ul className="text-secondary" style={{ display: "flex", flexDirection: "column" }}>
								{data?.length === 0 ? (
									<div style={{ textAlign: "center", marginTop: "2rem", color: "gray"}}>
									No new notifications
									</div>
								) : (
									data.map((notif) => (
									<li
										key={notif._id}
										onClick={(e) => {
										e.stopPropagation();
										HandleClick(notif._id);
										}}
										style={{
										marginBottom: "1rem",
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
										backgroundColor: "white",
										borderRadius: "5px",
										padding: "0.2rem",
										boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
										}}
									>
										<AiFillStar
										size={25}
										style={{
											color: clickedIds.includes(notif._id) ? "gray" : "red",
											marginRight: "0.5rem"
										}}
										/>
										{notif.message}
									</li>
									))
								)}
							</ul>
						</div>
					</li>
					<li style={{ marginLeft: "1rem", marginTop: ".8rem" }} className="nav-item ">
						<Dropdown menu={{ items }} trigger={["click"]}>
							<a href="#" onClick={(e) => e.preventDefault()}>
								<Space>
									<img src={openmojiSmile} alt="Memoji" width={40} style={{ borderRadius: 100, marginTop: -10, marginLeft: 15 }} />
								</Space>
							</a>
						</Dropdown>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default MyHeader;
