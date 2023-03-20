import { randomId } from "./utils";

const getCard = (content) => ({
  id: randomId(),
  content,
});
export default [
  {
    id: randomId(),
    name: "To do",
    cards: [
      getCard("Ingregrate frontend with backend"),
      getCard("Create integration tests"),
      getCard("Setup production environment"),
      getCard("Deploy to production"),
    ],
  },
  {
    id: randomId(),
    name: "Done",
    cards: [
      getCard("Want To Do"),
      getCard("I am so happy"),
      getCard("Trello Done"),
    ],
  },
];
