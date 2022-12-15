#!/usr/bin/env node

import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const getPath = (fileName) => path.join(dirname, fileName);
export default(fileName) => fs.readFileSync(getPath(fileName), 'utf-8');
