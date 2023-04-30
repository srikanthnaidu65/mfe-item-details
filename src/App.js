import React from "react";
import { Button, Fab, Chip } from "@mui/material";
import {
  HomeWork,
  AttachMoney,
  BrandingWatermark,
  Speed,
} from "@mui/icons-material";
import "./App.scss";

const sampleItemDetails = [
  {
    name: "Sertapedic Cool Nites Pillow, White, Standard/Queen",
    price: "23",
    rating: "1",
    label: "Save with Plus",
    tags: ["4+ day-shipping"],
    img: "https://image.shutterstock.com/image-photo/bed-made-white-linens-hotel-600w-1916402768.jpg",
    isSponsored: false,
    isAdd: true,
    isOption: false,
  },
  {
    name: "Supersoft Twin XL Bed Blanket in Black, Sized for College Dorm Beds, Plush and Warm, Solid Jet Black, Easy Care, by OCM",
    price: "10.45",
    rating: "2",
    label: "Save with Plus",
    tags: ["Pickup", "Delivery", "2 day-shipping"],
    img: "https://image.shutterstock.com/image-photo/soft-colorful-pillows-isolated-on-600w-765777445.jpg",
    isSponsored: false,
    isAdd: false,
    isOption: true,
  },
  {
    name: "Serta Clean Start 3-Piece Mattress Protector and Pillow Protector Bundle, Twin/Twin-XL",
    price: "11",
    rating: "1",
    label: "Save with Plus",
    tags: ["3 day-shipping"],
    img: "https://image.shutterstock.com/image-vector/white-pillow-on-blue-background-600w-418873012.jpg",
    isSponsored: false,
    isAdd: true,
    isOption: false,
  },
  {
    name: "Mainstays Faux Fur Plush Bedrest Pillow, Specialty Size, Grey , Piece",
    price: "34",
    rating: "4",
    label: "Save with Plus",
    tags: ["2+ day-shipping"],
    img: "https://image.shutterstock.com/image-photo/front-top-view-blue-cushion-600w-1163168743.jpg",
    isSponsored: false,
    isAdd: true,
    isOption: false,
  },
  {
    name: "Sweet Home Collection 1500 Thread Count 4 Piece Microfiber Bed Sheets Set, Queen, White",
    price: "56",
    rating: "2",
    label: "",
    tags: ["1 day-shipping"],
    img: "https://image.shutterstock.com/image-photo/stack-pillows-on-bed-600w-1058867168.jpg",
    isSponsored: false,
    isAdd: false,
    isOption: true,
  },
  {
    name: "Sertapedic No Go Flat Bed Pillow, Standard/Queen",
    price: "12",
    rating: "4",
    label: "",
    tags: ["Pickup", "Delivery"],
    img: "https://image.shutterstock.com/image-photo/sofa-colorful-pillows-room-600w-278912081.jpg",
    isSponsored: false,
    isAdd: true,
    isOption: false,
  },
  {
    name: "Mainstays Super Soft Plush Blanket, Full/Queen, Light Grey",
    price: "90",
    rating: "3",
    label: "Save with Plus",
    tags: ["Pickup"],
    img: "https://image.shutterstock.com/image-photo/pillow-clean-bed-sheet-on-600w-1932189221.jpg",
    isSponsored: false,
    isAdd: false,
    isOption: true,
  },
  {
    name: "Mainstays Ultra Soft High Quality Microfiber Bed Sheet Set, Twin/Twin XL, Grey, 3 Piece",
    price: "45",
    rating: "2",
    label: "Save with Plus",
    tags: ["Delivery"],
    img: "https://image.shutterstock.com/image-photo/bright-pillows-isolated-on-white-600w-101577598.jpg",
    isSponsored: false,
    isAdd: true,
    isOption: false,
  }
];

export default function () {
  return (
    <div className="item-details-container">
      <Fab className="mr-10" variant="extended">
        <HomeWork />
        In-Store
      </Fab>

      <Fab className="mr-10" variant="extended">
        <AttachMoney />
        $0-$30
      </Fab>

      <Fab className="mr-10" variant="extended">
        <BrandingWatermark />
        Brand
      </Fab>

      <Fab className="mr-10" variant="extended">
        <Speed />
        Speed
      </Fab>

      <a>Clear All</a>

      <div className="item-box-container">
        {sampleItemDetails.map((item, index) => (
          <div className="item-box" key={index}>
            <div className="item-box-content">
              <img src={item.img} />
              <div>
                {item.isAdd && <Button variant="contained">Add</Button>}
              </div>
              <div>
                {item.isOption && <Button variant="contained">Options</Button>}
              </div>
              <h2 className="mb-10">${item.price}</h2>
              <h3 className="mb-10">{item.name}</h3>
              <div className="mb-10">Rating is {item.rating}/5</div>
              <div className="mb-10 label">{item.label}</div>
              {item.tags.map((tag) => (
                <Chip key={tag} className="tag" label={tag} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
