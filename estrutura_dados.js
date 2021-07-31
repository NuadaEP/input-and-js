// string
const string = "text";

// number
const number = 123456;

// boolean
const boolean = false || true;

// object
const object = {
  string: "text",
  number: 123456,
  boolean: true,
};

// array
const array = [
  "outra",
  "text",
  123456,
  true,
  {
    string: "test",
    number: 123456,
    boolean: true,
  },
];

// array.forEach(function (item) {
//   console.log(item);
// });

const novoArray = array.map(function (item) {
  if (typeof item == "string") {
    return {
      string: item,
      number: 0,
      boolean: false,
    };
  }

  if (typeof item == "number") {
    return {
      string: "",
      number: item,
      boolean: false,
    };
  }

  if (typeof item == "boolean") {
    return {
      string: "",
      number: 0,
      boolean: item,
    };
  }

  return item;
});

const encontrado = array.find(function (item) {
  if (typeof item == "string") {
    return true;
  }

  return false;
});

const primeira = [];

array.forEach(function (item) {
  if (typeof item == "string" && item == "text") {
    primeira.push({
      string: item,
      number: 0,
      boolean: false,
    });
  }
});

const tarefas = [
  {
    name: "bruno",
  },
  {
    name: "gabi",
  },
  {
    name: "erik",
  },
];

const novaTarefa = tarefas.map(function (tarefa) {
  if (tarefa.name == "bruno") return tarefa.name;
});

console.log(novaTarefa);
