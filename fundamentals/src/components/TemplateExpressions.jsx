const TemplateExpressions = () => {
  const name = "Peixoto";
  const data = {
    age: 20,
    job: "dev",
  };

  return (
    <div>
      <h1>Hi {name}, how are you? </h1>
      <p>you act as {data.job}</p>
      <p>{data.age > 18 && "main nitro"}</p>
      <p>{4 + 4}</p>
      <p>{console.log("JSX React")}</p>
    </div>
  );
};

export default TemplateExpressions;
