
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput) // callback handleUserInpur... async
  return stdin
}


const handleUserInput = ('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === "w") {
    connection.write("Move: up")
  } else if (key === "a") {
    connection.write("Move: left")
  } else if (key === "s") {
    connection.write("Move: down")
  } else if (key === "d") {
    connection.write("Move: right")
  } else if (key === "p") {
    connection.write("Say: WNNR WNNR CHCKN DNNR!")
  } else if (key === "y") {
    connection.write("Say: YUMMY!")
  }
});











module.exports = {setupInput};
