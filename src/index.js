import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const reader = new FileReader();

function readFileAsArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    if (file instanceof File) {
      reader.onload = (result) => {
        resolve(reader.result);
      }
      reader.readAsArrayBuffer(file);
    } else {
      reject(new Error('This type of object is not supported'));
    }
  });
}

/**
 * Returns blob of zipped files
 */
export async function zipFiles(files) {
  const zip = new JSZip();
  reader.addEventListener
  for (const file of files) {
    const buffer = await readFileAsArrayBuffer(file)
    zip.file(file.name, buffer);
  }
  try {
    const blob = await zip.generateAsync({ type: 'blob' }, ({ percent }) => {
      console.log(`progress: ${percent.toFixed(2)}%`);
    });
    return blob;
  } catch (err) {
    console.error(err);
  }
}

/**
 * Returns blob of zipped files
 */
export async function zipRemoteFiles(remoteFiles) {
  const files = [];
  for (const fileURL of remoteFiles) {
    try {
      const response = await fetch(fileURL);
      const blob = await response.blob();
      const filename = fileURL.split('/').pop();
      const file = new File([blob], filename, { lastModified: Date.now() });
      files.push(file);
    } catch (err) {
      console.error(err);
    }
  }
  return await zipFiles(files);
}

/**
 * Start download zipped files
 */
export async function downloadZip(files, { remote, as = 'files' }) {
  let blob;
  if (remote) {
    blob = await zipRemoteFiles(files);
  } else {
    blob = await zipFiles(files);
  }
  saveAs(blob, `${as}.zip`);
}

