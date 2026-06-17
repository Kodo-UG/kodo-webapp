import { ScholarshipCard } from "./ScholarshipCard";
import FAQ from "./FAQ";
import CustomContainer from "../components/ShredComponents/CustomerContainer";
import "./accordion.css"; // Import the CSS file
import axios from 'axios';
import { BASE_URL } from "../constants/api";
import {useState,useEffect} from 'react';

export default function Accordion() {
  const [data,setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [sports,setSports] = useState([]);
  const [free,setFree] = useState([]);

  const scholarship_data = [
    {
      id: 1,
      title:"No Essay Scholarship",
      about:"High school seniors who are facing financial challenges may apply to win up to a $10,000 scholarship to help them attend college or a vocational-technical school. Applications are now open through April 25, 2025",
      deadline:"April 25, 2025",
      award:"$10,000 "
    },
    {
      id: 2,
      title:"Be Bold No-Essay Scholarship",
      about:"we believe that the world will be shaped by the bold—the fighters, the risk-takers, the earnest overachievers who won’t take no for an answer—the ones who know that a mountain is climbed one step at a time",
      deadline:"May 5, 2025",
      award:"$25,000"
    },
    {
      id: 3,
      title:"Niche No Essay Scholarship",
      about:"Niche can help with every step of the college search including paying for it. We're giving one student $25,000 to help cover tuition, housing, books and other college expenses — no essay required!",
      deadline:"October 2, 2025",
      award:"$25,000"
    },
    {
      id: 4,
      title:"Utility Workers Union of America Scholarship",
      about:"The Utility Workers Union of America established a scholarship program in an effort to promote the solidarity of its members and encourage educational growth of the future generations of our labor organization.",
      deadline:"September 8, 2025",
      award:"£15,000"
    },
    {
      id: 5,
      title:"Cleveland State University Honors Program Scholarship",
      about:"The Cleveland State University Honors Program Scholarship is open to incoming freshmen students. Students in Honors typically are in the top 10 percent of their class or have an ACT of 30 or an SAT of 1380. Incoming freshmen must attend CSU beginning the summer or fall following their high school graduation and must attend CSU full-time",
      deadline:"August 10, 2025",
      award:"Full funded"
    },
    {
      id: 6,
      title:"University of Vermont Green and Gold Scholars Award",
      about:"The University of Vermont Green & Gold Scholarship is an academic merit scholarship program that considers the nomination of the most academically talented rising high school senior from every eligible Vermont secondary school and Vermont resident attending select border schools.",
      deadline:"November 25, 2025",
      award:"$65,000"
    }
  ]
  
	// const config = {
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 		Authorization: `Bearer ${localStorage.getItem("token")}`,
	// 	},
	// };

  // const token = localStorage.getItem("token");

	// const getScholarship = async () => {
	// 	try {
	// 		const res = await axios.get(`${BASE_URL}/scholarship`, config);
	// 		// console.log(res?.data.subscription, "==-----");

	// 		setData(res.data.data);
  //     console.log(data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

  // const getFree = async() => {
  //   try{
  //     const res = await axios.get(`${BASE_URL}/scholarship/free/scholarships`);
  //     console.log(res);
  //     setData(res.data.data);
  //   }catch(error){
  //     console.log(error);
  //   }
  // }

  // const getSports = async() => {
  //   try{
  //     const res = await axios.get(`${BASE_URL}/scholarship/sports`,config);
  //     console.log(res);
  //     setData(res.data.data);
  //   }catch(error){
  //     console.log(error);
  //   }
  // }

  // const getSTEM = async() => {
  //   try{

  //   }catch(error){
  //     console.log(error);
  //   }
  // }

//   useEffect(() => {
//     getScholarship();
//  if(token){
//   getScholarship();
//  } else {
//   setData(scholarship_data);
//  }
//     getSports();
//   },[]);

  
  // Pagination Logic
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <>
      <section className="accordion-section"
        style={{
            color: '#1d2855' 
        }}
      >
        <CustomContainer>
          <div className="accordion-container"
          > 
            <h1 className="accordion-title">
              Find the right
              <br />
              scholarships for you
            </h1>
            <div className="filter-buttons">
              <button className="filter-button primary">All Scholarships</button>
              <button className="filter-button secondary">STEM</button>
              <button className="filter-button secondary">Women</button>
              <button className="filter-button secondary"
                // onClick={async () => {
                //   const res = await getSports();  // Wait for API call to complete
                //   setData(res?.data?.data || []);
                // }}
              >Sports</button>
            </div>
          </div>
          <div className="scholarship-list" 
          >
            {scholarship_data
              .map((data, i) => (
                <ScholarshipCard
                  key={i}
                  data={data}
                />
              ))}
          </div>
          <div className="pagination-controls">
            <button 
              className="pagination-button" 
              onClick={handlePrevPage} 
              disabled={currentPage === 1}
            >
              ←
            </button>
            <span className="pagination-text">
              <span>{currentPage}</span>
              <span className="text-muted"> of </span>
              <span>{totalPages}</span>
            </span>
            <button 
              className="pagination-button" 
              onClick={handleNextPage} 
              disabled={currentPage === totalPages}
            >
              →
            </button>
          </div>
        </CustomContainer>
      </section>

      <CustomContainer>
        <section className="faq-section"
        >
          <div className="faq-grid">
            <div className="faq-image-container">
              <div className="faq-image">
                <img
                  src="https://res.cloudinary.com/digrh1wj1/image/upload/v1742428495/Group_4_cl8hlc.png"
                  alt="Student with backpack"
                />
              </div>
            </div>
            <FAQ />
          </div>
        </section>
      </CustomContainer>
    </>
  );
}
