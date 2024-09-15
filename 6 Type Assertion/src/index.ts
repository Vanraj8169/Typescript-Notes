// Type Assertion
// const btn  = document.getElementById("btn") as HTMLElement;
// const btn = <HTMLElement>document.getElementById("btn")!;
// btn.onclick;

// const form = document.getElementById("form") as HTMLFormElement;
// const input = document.getElementById("input") as HTMLInputElement;

// form.onsubmit = (e: SubmitEvent) => {
//   e.preventDefault();
//   const value = Number(input.value);

//   const h2 = document.createElement("h2");
//   const body = document.querySelector("body") as HTMLBodyElement;
//   h2.textContent = String(value + 20);
//   body?.append(h2);
// };

interface Person {
  [key: string]: string;
}

const myobj: Person = {
  name: "Vanraj",
  email: "vanraj@gmail.com",
};

const getName = (): string => {
  return myobj["name"];
};

const getEmail = (): string => {
  return myobj["email"];
};

const getData = (key: keyof Person): string => {
  return myobj[key];
};

getData("name");
