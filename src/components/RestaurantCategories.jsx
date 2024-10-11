import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RestaurantCategoryList from "./RestaurantCategoryList";

const RestaurantCategories = (props) => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    props.setShowItemsIndex()
  };

  const title = props?.data?.card?.card?.title;
  const nestedTitle = props?.data?.card?.card?.itemCards;

  return (
    <div className="max-w-2xl mx-auto my-6">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="border border-gray-300 rounded-
       shadow-lg"
      >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
        >
          <Typography variant="h6" className="font-bold text-gray-900">
            {title}({nestedTitle.length})
          </Typography>
        </AccordionSummary>
        {props.showItemsIndex && (
          <AccordionDetails className="bg-white">
            <div className="space-y-6">
              {nestedTitle.map((item) => (
                <RestaurantCategoryList
                  key={props?.data?.card?.card?.itemCards?.card?.info?.id}
                  data={item}
                />
              ))}
            </div>
          </AccordionDetails>
        )}
      </Accordion>
    </div>
  );
};

export default RestaurantCategories;
