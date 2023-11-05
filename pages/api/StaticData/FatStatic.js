import fs from "fs";
import path from "path";

function getData() {
  const filePath = path.join(process.cwd(), "data", "Fat_data.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

function handler(req, res) {
  if (req.method === "GET") {
    const data = getData();
    res.status(200).json({ message: data });
  } else if (req.method === "POST") {
    const { title, subtitle, description, image1 } = req.body;
    const newSupplement = {
      title,
      subtitle,
      description,
      image1,
      id: Date.now(),
    };

    const filePath = path.join(process.cwd(), "data", "Fat_data.json");

    const data = getData();
    data.push(newSupplement);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Added", book: newSupplement });
  }
}

export default handler;
