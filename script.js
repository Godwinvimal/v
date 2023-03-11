var url = 'https://script.googleusercontent.com/macros/echo?user_content_key=RKv2lF5wBdGU_OW8WzEmfBsDJ7SZUKCavT4kotCsXqj3VHcpXr_O40dvmddFVYtGYxf29FzvtMT9spCE-jeHJteOr1nQrhR6m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC1aUSCkK4mccMp5tt3CxMXitAWmw5vj8XYXmiRQocqIIxNpoIv8xWgm9H_2gCVWznzx0vjs5uBkTy9OXcCxPIBbW313Vxg7Mg&lib=M6qXt0Kldc0AArRhK8eUZdNcSVaJnOjrd';

var tablehead = document.getElementById('table-header'); 
var table = document.getElementById('table-data');
var getheader = '';
var getdata = '';

fetch(url)
  .then(response => response.json())
  .then(data => {
    getheader += '<tr> \n<th>'+data['content'][0][0]+'</th> \n<th>'+data['content'][0][1]+'</th> \n<th>'+data['content'][0][2]+'</th> \n</tr>';
    for(let i=1; i<data['content'].length; i++){
      getdata += '<tr> \n<td>'+data['content'][i][0]+'</td> \n<td>'+data['content'][i][1]+'</td> \n<td>'+data['content'][i][2]+'</td> \n</tr>';
    }
    tablehead.innerHTML = getheader;
    table.innerHTML = getdata;
  })
  .catch(error => {
    console.error(error);
  });

