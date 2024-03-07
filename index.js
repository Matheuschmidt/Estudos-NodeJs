const http = require("http");
const fs = require("fs");

const hostname = "localhost";
const port = 8080;

//Criar Novo Arquivo
/*
fs.writeFile("matheus.txt","teste Matheus code", function(err, data) {
    if (err) throw err;
    console.log("O arquivo foi  criado com suceso");
});
*/

//Criar Novo Arquivo ou Insere o Conteúdo do que Ja existe
/*
fs.appendFile("matheus.txt","\nTeste", (err)=> {
    if (err) throw err;
    console.log("O arquivo foi salvo novamente com sucesso!");
});
*/

const server = http.createServer((req, res) => {
  if (req.url == "/matheus"){
    fs.readFile("index.html", function (err, data) {
        fs.appendFile("matheus.txt","\nTeste", (err)=> {
            if (err) throw err;
            console.log("O arquivo foi salvo novamente com sucesso!");
        });
        
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  }else{
    //return res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`server is running on ${hostname}:${port}`);
});
