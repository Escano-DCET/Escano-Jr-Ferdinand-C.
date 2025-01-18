const firstName = "foo";
const lastName = "bar";

for (let i = 0; i <= 20; i++) {
  console.log(
    i >= 3 && i <= 5
      ? firstName
      : i >= 6 && i <= 10
      ? lastName
      : i === 2
      ? "two" 
      : i
  );
}