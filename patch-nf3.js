import fs from 'node:fs';
import path from 'node:path';

const filePath = path.join(process.cwd(), 'node_modules', 'nf3', 'dist', '_chunks', 'trace.mjs');

if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('import { nodeFileTrace } from "@vercel/nft";')) {
    content = content.replace(
      'import { nodeFileTrace } from "@vercel/nft";',
      'import nftPkg from "@vercel/nft"; const { nodeFileTrace = nftPkg.nodeFileTrace } = nftPkg;'
    );
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully patched nf3 to use default import for @vercel/nft');
  } else {
    console.log('nf3 trace.mjs already patched or modified');
  }
} else {
  console.log('nf3 trace.mjs not found at ' + filePath);
}
