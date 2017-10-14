import React from "react";

import Slider from "rc-slider";

import {Column, Field, Control, Input, Button} from "bloomer";

const SunIcon = require("../if_cloud_126565.png");

const Header = ({
  address,
  getForecast,
  hourFilter,
  isLoading,
  setAddress,
  setHourFilter,
}) => {
  const isDesktop = window.innerWidth > 768;

  return (
    <header
          style={{
            position: "fixed",
            width: "100vw",
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            flexWrap: "wrap",
            overflow: "visible",
            padding: 10,
            background: "#fff900",
            height: 100,
          }}
>
      <img
        src={SunIcon}
        alt={"Horizonal"}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          marginLeft: 8,
          ...(isDesktop
            ? {width: 96, marginTop: 0}
            : {width: 32, marginTop: 12}),
        }}
      />
      <div
        style={{
          width: "100%",
          ...(isDesktop
            ? {marginLeft: 100, paddingLeft: 10}
            : {marginLeft: 40}),
        }}
      >
        <Field hasAddons>
          <Control>
            <Input
              placeholder="Westfield, IN"
              value={address}
              onChange={event => setAddress({address: event.target.value})}
            />
          </Control>
          <Control>
            <Button
              isColor="info"
              isLoading={isLoading}
              render={props =>
                <Column
                  onClick={getForecast}
                  style={{cursor: "pointer", padding: 0, margin: 0}}
                >
                  <span {...props}>Forecast</span>
                </Column>}
            />
          </Control>
        </Field>
      </div>
      <div
        style={{
          width: "100%",
          marginTop: 8,
          ...(isDesktop ? {marginLeft: 100} : {marginLeft: 0}),
        }}
      >
        <Slider
          min={0}
          max={24}
          marks={{
            0: "ALL",
            4: "4",
            8: "8",
            10: "10",
            12: "12p",
            14: "2",
            17: "5",
            19: "7",
            21: "9",
            24: "12a",
          }}
          style={{height: 30, width: "unset", margin: "0 20px 20px"}}
          value={hourFilter}
          onChange={setHourFilter}
        />
      </div>
    </header>
  );
};

export default Header;