import React, { useState } from "react";
import { HotelData, Data } from "../fake-data/index";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const listItem: Data[] = HotelData;
  const [parking, setParking] = useState<boolean>(false);
  const [petting, setPetting] = useState<boolean>(false);
  const [all, setAll] = useState<boolean>(true);
  const [length, setLength] = useState<number>(5);
  const [selected, setSelected] = useState<string>("");

  function countData(): Data[] {
    const filterData = listItem.filter((data) => {
      if (all) {
        return true;
      } else if (parking && petting) {
        return data.isParking === true && data.isPetting === true;
      } else if (parking) {
        return data.isParking === true;
      } else if (petting) {
        return data.isPetting === true;
      }
    });
    return filterData;
  }

  function handleSelected(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelected(e.target.value);
  }

  function onChangeAll() {
    setAll(!all);
    setParking(false);
    setPetting(false);
  }

  function onChangeParking() {
    setParking(!parking);
    setAll(false);
  }
  function onChangePetting() {
    setPetting(!petting);
    setAll(false);
  }
  return (
    <div className="home">
      <div className="form">
        <h4>透過以下分類搜尋</h4>
        <li>
          <input
            type="checkbox"
            value="全部"
            name="全部"
            id="全部"
            onChange={onChangeAll}
            checked={all}
          />
          <label htmlFor="全部">全部</label>
        </li>
        <li>
          <input
            type="checkbox"
            value="停車場"
            name="停車場"
            id="停車場"
            onChange={onChangeParking}
            checked={parking}
          />
          <label htmlFor="停車場">停車場</label>
        </li>
        <li>
          <input
            type="checkbox"
            value="寵物友善"
            name="寵物友善"
            id="寵物友善"
            onChange={onChangePetting}
            checked={petting}
          />
          <label htmlFor="寵物友善">寵物友善</label>
        </li>
      </div>
      <div>
        <div className="card-title">
          <h2>
            找到
            {countData().length}
            間飯店
          </h2>
          <select onChange={handleSelected}>
            <option>為您精選</option>
            <option>價格低到高</option>
            <option>評分低到高</option>
          </select>
        </div>

        {countData()
          .sort(function (a: Data, b: Data): number {
            if (selected === "價格低到高") {
              return a.price - b.price;
            } else if (selected === "評分低到高") {
              return a.score - b.score;
            } else {
              return 0;
            }
          })
          .map((data) => {
            return (
              <div className="card">
                <img src={data.imageSrc} />
                <div className="content">
                  <h2 className="title">{data.title}</h2>
                  <FontAwesomeIcon icon={faLocationDot} color="red" />
                  <h4 className="area">{data.area}</h4>
                  <p className="description">{data.description}</p>
                </div>
                <div className="rank">
                  <h2 className="score">{data.score}</h2>

                  <h2 className="price">{data.price} NT$</h2>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
