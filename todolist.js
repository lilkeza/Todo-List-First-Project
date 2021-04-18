const todolist = []
let input = prompt("What would you like to do?");
while (input !== "quit" && input !== "q") {
    if (input === "new") {
        const newtodo = prompt("Enter a new todo!");
        console.log(`${newtodo} added to the list`);
        todolist.push(newtodo)
    } else if (input === "list") {
        console.log("**********")
        for (let i = 0; i < todolist.length; i++) {
            console.log(i + ': ' + todolist[i]);
        }
        console.log("**********")
    } else if (input === "delete") {
        const remove = parseInt(prompt("Enter index to remove"));
        if (!Number.isNaN(remove)) {
            const deleted = todolist.splice(remove, 1);
            console.log(`Ok, deleted todo: ${deleted[0]}`)
        } else {
            console.log("Unknown index")
        }
    } else {
        console.log("Please enter a valid command!")
    }
    input = prompt("Insert command")
}
console.log("Ok Goodbye!")
