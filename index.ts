import express, { Express, Request, Response} from 'express'
import fs  from 'fs'


const app: Express = express();
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  fs.readFile('./temp.txt', (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});


app.post('/', (req: Request, res: Response) => {
  let data: { text: string } = req.body;
  fs.writeFile('./temp.txt', data.text, () => {
    console.log(data.text);
  });
  res.send("File created and added text");
});


app.delete('/', (req: Request, res: Response) => {
  fs.unlink('./temp.txt', () => console.log("file deleted"));
  res.send("File deleted successfully");
});


app.put('/', (req: Request, res: Response) => {
  let data: { text: string } = req.body;
  fs.appendFile('./temp.txt', data.text, () => {
    console.log("File updated")
  });
  res.send("File updated");
});


app.listen(3000, () => console.log("Server is running at localhost"));
