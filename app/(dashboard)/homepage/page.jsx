import Card from "@/components/Card";

function Homepage() {
  return (
    <div className="p-5">
      <h1 className="text-[50px] font-bold">Overview</h1>
      <div className="flex gap-3 items-center justify-center">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Homepage;
