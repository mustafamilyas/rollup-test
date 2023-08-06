export * from "./math/index";

export default function main() {
  const countTo = 10;
  console.log(`Counting to ${countTo}...`);
  for (let i = 0; i < countTo; i++) {
    console.log(i);
  }
}
