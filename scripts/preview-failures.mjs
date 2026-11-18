// QA-only static server: deliberately fail decorative backgrounds and the Projects chunk.
// Uses the real production build in place. Never used by deployment.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = resolve('dist');
const types = {'.html':'text/html','.js':'text/javascript','.css':'text/css','.webp':'image/webp','.png':'image/png','.woff2':'font/woff2'};
createServer(async (req,res)=>{
 const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
 if (/index_bg|\/Projects-/.test(pathname)) {res.writeHead(503); res.end('Simulated resource failure'); return;}
 const file = resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
 if(!file.startsWith(root+sep)){res.writeHead(403);res.end();return;}
 try{const body=await readFile(file);res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream','Cache-Control':'no-store'});res.end(body);}catch{res.writeHead(404);res.end('Not found');}
}).listen(4174,'127.0.0.1',()=>console.log('QA failures: http://127.0.0.1:4174/'));
