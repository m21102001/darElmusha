import React, { useEffect, useState } from "react";
import "./SellsPoints.scss";
import Cards from "../../../../../../components/ui/cards/Cards";

import { useNavigate } from "react-router-dom";
import { getAllDepartments } from "../../../../../../apis/departments";
import SellsPointsCard from "../../../../../../components/ui/cards/SellsPointsCard";

function SellsPoints() {


  // const [data, setData] = useState([]); // Initialize data as null

  const data = [
    { id: 1, image: "http://10.0.6.8:3000/storage/departments_images/fKdsb8NU32rVSjvfIvLAluY1mzaIt6XwgY5W2MLr.jpg", name: "كوفى شوب برادايس ", from: "8 AM", to: "4 PM", date: "6/8/2024" },
    { id: 2, image: "http://10.0.6.8:3000/storage/departments_images/fKdsb8NU32rVSjvfIvLAluY1mzaIt6XwgY5W2MLr.jpg", name: "مطعم برادايس ", isActive: "true", from: "8 AM", to: "4 PM", date: "6/8/2024" },
    { id: 3, image: "http://10.0.6.8:3000/storage/departments_images/fKdsb8NU32rVSjvfIvLAluY1mzaIt6XwgY5W2MLr.jpg", name: "جاردن1", from: "8 AM", to: "4 PM", date: "6/8/2024" },
    { id: 4, image: "http://10.0.6.8:3000/storage/departments_images/fKdsb8NU32rVSjvfIvLAluY1mzaIt6XwgY5W2MLr.jpg", name: "جاردن2 ", from: "8 AM", to: "4 PM", date: "6/8/2024" },
    { id: 5, image: "http://10.0.6.8:3000/storage/departments_images/fKdsb8NU32rVSjvfIvLAluY1mzaIt6XwgY5W2MLr.jpg", name: "الاندلسية ", from: "8 AM", to: "4 PM", date: "6/8/2024" },
    { id: 6, image: "http://10.0.6.8:3000/storage/departments_images/fKdsb8NU32rVSjvfIvLAluY1mzaIt6XwgY5W2MLr.jpg", name: " بولينج (العاب)", from: "8 AM", to: "4 PM", date: "6/8/2024" },
    { id: 7, image: "http://10.0.6.8:3000/storage/departments_images/fKdsb8NU32rVSjvfIvLAluY1mzaIt6XwgY5W2MLr.jpg", name: " بولينج (اكل و شرب)", from: "8 AM", to: "4 PM", date: "6/8/2024" },
    { id: 8, image: "http://10.0.6.8:3000/storage/departments_images/fKdsb8NU32rVSjvfIvLAluY1mzaIt6XwgY5W2MLr.jpg", name: " (انشطة) السباحة ", from: "8 AM", to: "4 PM", date: "6/8/2024" },
    { id: 9, image: "http://10.0.6.8:3000/storage/departments_images/fKdsb8NU32rVSjvfIvLAluY1mzaIt6XwgY5W2MLr.jpg", name: " حمام السباحة (بيتزا وشاورما) ", from: "8 AM", to: "4 PM", date: "6/8/2024" },
    { id: 10, image: "http://10.0.6.8:3000/storage/departments_images/fKdsb8NU32rVSjvfIvLAluY1mzaIt6XwgY5W2MLr.jpg", name: "4u Cafe ", isActive: "true", from: "8 PM", to: "12 PM", date: "6/8/2024" },
  ]

  const navigate = useNavigate()
  const fetchData = async () => {
    try {
      const recipeData = await getAllDepartments({});
      setData(recipeData.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };


  useEffect(() => {

    fetchData(); // Call fetchData when component mounts
  }, []);
  const handleCardClick = (department) => {
    // Handle click action here, for example, you can log the department name
    console.log("Clicked on department:", department);
    navigate(`/warehouse/returants/show-subCategory/${department}`)
  };
  console.log('data data data', data);
  return (
    <>
      <h1 className="heading text-center p-3">نقاط البيع </h1>
      <div className="cards-container">
        <div className="row">
          {data.map((department, index) => (
            <SellsPointsCard
              key={index}
              img={department?.image}
              department={department?.name}
              isActive={department?.isActive}
              from={department?.from}
              to={department?.to}
              date={department?.date}
              onClick={() => handleCardClick(department?.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SellsPoints;
