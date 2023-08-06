import { version, name } from "../package.json";

export default function main() {
  console.log(`Hello from ${name} v${version}!`);
  const countTo = 10;
  console.log(`Counting to ${countTo}...`);
  for (let i = 0; i < countTo; i++) {
    console.log(i);
  }
}
