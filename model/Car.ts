import { Schema, models, model } from "mongoose";

const CarSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    priceFrom: {
      type: Number,
      required: true,
    },

    installmentPrice: {
      type: Number,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    registration: { type: Number, required: true },

    avatar: { type: { public_id: String, url: String }, required: true },

    colors: {
      type: [
        {
          type: {
            color: String,
            colorImg: { public_id: String, url: String },
          },
        },
      ],
      default: [],
    },

    carLines: [
      {
        type: {
          name: String,
          price: Number,
          tax: String,
        },
      },
    ],

    saleContent: { type: String, required: true },

    exterior: { type: String, default: "" },

    interior: { type: String, default: "" },

    specifications: { type: String, default: "" },

    brochure: { type: String, default: "" },

    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Car = models?.Car || model("Car", CarSchema);

export default Car;
