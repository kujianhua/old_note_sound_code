# JS

## 文件下载

 图片，PDF; 在`window.open(url)`时，会浏览器直接打开文件，还不是下载到本地

 ```js

import FileSaver from "file-saver";

//根据文件地址，直接下载文件到本地
export const downloadByOnlineURL = (url, filename) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      if (xhr.status === 200) {
        //通过url去拿文件的blob，
        //然后直接下载到本地
        FileSaver.saveAs(xhr.response, filename);
      }
    };
    xhr.send();
}
 ```