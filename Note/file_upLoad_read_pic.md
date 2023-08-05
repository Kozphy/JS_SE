# file 檔案上傳作法 與 讀取圖片

## source

### MDN

https://developer.mozilla.org/zh-TW/docs/Web/API/File/Using_files_from_web_applications

### FormData

https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/FormData

## read pic

https://javascript.info/file

- 上傳檔案需要把 input 改成 type="file"
- 用 DOM 選取該 file
- 把 file 轉成 formData，因為 formData 能轉成文字形式

## read pic and display

```js
showFile() {
      const selectedFile = this.$refs.selectedFile.files[0];
      // 讀取並顯示圖片
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = () => {
        this.imgUrl = reader.result;
      };
    },
```

## upload pic and convert formData

```js
uploadFile() {
      this.isLoading = true;
      const selectedFile = this.$refs.selectedFile.files[0];
      // 上傳圖片
      const formData = new FormData();
      formData.append('file', selectedFile);
      uploadApiFile(formData).then(() => {
        this.getAllImg();
        $('#modal').modal('hide');
        this.isLoading = false;
      }).catch((rej) => {
        this.isLoading = false;
        $('#modal').modal('hide');
        throw rej;
      });
    },
```
