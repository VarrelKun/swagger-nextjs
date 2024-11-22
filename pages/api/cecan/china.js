// pages/api/cecan/china.js
import axios from "axios";
import q from "../../../app/declaration/config.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const result = await getRandomChinaCecan();
  if (result.status === false) {
    return res.status(500).json(result);
  }
  res.status(200).json(result);
}

async function getRandomChinaCecan() {
  try {
    const cecanUrls = [
      "https://i.postimg.cc/QdncScPQ/1.jpg",
      "https://i.postimg.cc/zv1CK5Q4/10.jpg",
      "https://i.postimg.cc/4x3zzW84/11.jpg",
      "https://i.postimg.cc/pXCfhwJ1/12.jpg",
      "https://i.postimg.cc/brHQRWcr/13.jpg",
      "https://i.postimg.cc/zX8wfzKg/14.jpg",
      "https://i.postimg.cc/QM91zHGR/15.jpg",
      "https://i.postimg.cc/43DVRsXn/16.jpg",
      "https://i.postimg.cc/nrkDmmBQ/17.jpg",
      "https://i.postimg.cc/CLhDgvpC/18.jpg",
      "https://i.postimg.cc/fT8dTxMG/19.jpg",
      "https://i.postimg.cc/RFwfMy0d/2.jpg",
      "https://i.postimg.cc/nrZmM2jJ/20.jpg",
      "https://i.postimg.cc/dVDy7L1L/21.jpg",
      "https://i.postimg.cc/kMF8z0zX/22.jpg",
      "https://i.postimg.cc/VkTbXmr4/23.jpg",
      "https://i.postimg.cc/3wv0BV2h/24.jpg",
      "https://i.postimg.cc/V6PrHgFC/25.jpg",
      "https://i.postimg.cc/MT0MkBsr/26.jpg",
      "https://i.postimg.cc/RhM3v0yC/27.jpg",
      "https://i.postimg.cc/D0BS0T3r/28.jpg",
      "https://i.postimg.cc/VsRrDj0J/29.jpg",
      "https://i.postimg.cc/TY3ySpnC/3.jpg",
      "https://i.postimg.cc/NfCywB4Y/30.jpg",
      "https://i.postimg.cc/3RZRfTRs/31.jpg",
      "https://i.postimg.cc/HnZLH9b3/4.jpg",
      "https://i.postimg.cc/rFsmj7LH/5.jpg",
      "https://i.postimg.cc/4N03Swfx/6.jpg",
      "https://i.postimg.cc/66YqdtFR/7.jpg",
      "https://i.postimg.cc/rwtpXWsC/8.jpg",
      "https://i.postimg.cc/wB8j6vsK/9.jpg",
    ];
    const randomIndex = Math.floor(Math.random() * cecanUrls.length);
    const randomCecanUrl = cecanUrls[randomIndex];

    const { data } = await axios.get(randomCecanUrl)
    return {
      status: true,
      creator: "GOPALASU",
      result: {
        url: data,
      },
    };
  } catch (error) {
    return {
      status: false,
      creator: "GOPALASU",
      message: "Gagal mengambil gambar.",
    };
  }
}
