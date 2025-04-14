const axios = require('axios');

const API_BASE_URL = 'http://localhost:8000';

async function apiRequest(method, endpoint, data = null) {
  try {
    const response = await axios({
      method,
      url: `${API_BASE_URL}${endpoint}`,
      data,
    });
    console.log(response.data);
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
  }
}

apiRequest('POST', '/buckets', { bucketName: 'myBucket' });
apiRequest('GET', '/buckets'); // this is to retrieve the list of existing buckets
apiRequest('GET', '/buckets/myBucket'); // this is to retrieve the details of a specific bucket
apiRequest('GET', '/buckets/myBucket/files');  // this is to retrieve the list of files in a specific bucket

const FormData = require('form-data');
const fs = require('fs');

async function uploadFile(bucketName, filePath) {
  const form = new FormData();
  form.append('file', fs.createReadStream(filePath));
  
  try {
    const response = await axios.post(`${API_BASE_URL}/buckets/${bucketName}/files`, form, {
      headers: form.getHeaders(),
    });
    console.log(response.data);
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
  }
}

uploadFile('myBucket', '../public/7.7-KB.txt'); // this is the api request command for uploading a file

// for file download from the bucket
async function downloadFile(bucketName, fileName, outputDir) {
    try {
      const response = await axios.get(`${API_BASE_URL}/buckets/${bucketName}/files/${fileName}/download`, {
        responseType: 'blob',
      });
      console.log(`File downloaded: ${fileName}`);
      fs.writeFileSync(`./${outputDir}/${fileName}`, response.data);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
}


