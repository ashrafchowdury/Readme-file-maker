

//download file
const downloadMarkdownFile = () => {
    try {
      const a = document.createElement('a')
      const blob = new Blob([file_name])
      a.href = URL.createObjectURL(blob)
      a.download = 'ashrafImage.png'
      a.click()
    } catch (error) {
      console.log(error);
    }
  }