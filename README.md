# FileZipper

* Download multiple files as zip
* Based on [jszip](https://github.com/Stuk/jszip)

## Examples

* [Drag & Drop & Zipping](https://syumai.github.io/examples/)
* [Zipping remote files from URL](https://syumai.github.io/examples/fetch-download.html)

## Usage

```js
// Download files as zip
FileZipper.downloadZip(someArrayOfFiles);

// Download remote files as zip
const remoteFileURLs = [ url1, url2 ];
FileZipper.downloadZip(remoteFileURLs, { remote: true });

// Name zip (file name will be 'named-zip.zip')
FileZipper.downloadZip(someArrayOfFiles, { as: 'named-zip' });
```

