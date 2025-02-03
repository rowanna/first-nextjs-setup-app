import { notFound } from "next/navigation";

export default function Customers() {
  const handleError = () => {
    throw new Error("일부러 에러 발생");
  };
  try {
    handleError();
  } catch (err) {
    console.log(err);
    console.log(process.env.NODE_ENV, "===");

    notFound();
  }

  return <div>customer page</div>;
}
