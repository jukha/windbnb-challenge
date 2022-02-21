import React, { useState } from "react";
import Card from "../Card";
import data from "../data";
import "./style.css";
import logo from "../assets/logo.svg";
import SearchBar from "../SearchBar/";
import { AiOutlineClose } from "react-icons/ai";

const List = () => {
  const [currCity, setCurrCity] = useState("");
  const [findGuests, setFindGuests] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {};

  const filteredPlacesList = currCity
    ? data.filter(
        (item) => item.city === currCity && item.maxGuests >= findGuests,
      )
    : data.map((item) => item);

  return (
    <section className="list-parent">
      {isModalOpen && (
        <>
          <div className="overlay"></div>
          <div className="modal">
            <SearchBar
              data={data}
              setCurrCity={setCurrCity}
              setFindGuests={setFindGuests}
              setIsModalOpen={setIsModalOpen}
            />
            <AiOutlineClose
              className="icon"
              onClick={() => setIsModalOpen(!isModalOpen)}
            />
          </div>
        </>
      )}

      <header className="header">
        <div className="logo-container">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="inputs">
          <SearchBar
            data={data}
            setCurrCity={setCurrCity}
            setFindGuests={setFindGuests}
            setIsModalOpen={setIsModalOpen}
          />

          <a className="drawer" onClick={() => setIsModalOpen(!isModalOpen)}>
            Click here for advanced search
          </a>
        </div>
      </header>
      <section>
        <div className="stays">
          <h2 className="stays__title">Stays in Finland</h2>
          <p className="stays__number">{filteredPlacesList.length} +stays</p>
        </div>
        <div className="list">
          {filteredPlacesList.length > 0 ? (
            filteredPlacesList.map((item, index) => {
              return <Card key={index} {...item} />;
            })
          ) : (
            <h4>No results were found!</h4>
          )}
        </div>
      </section>
    </section>
  );
};

export default List;
