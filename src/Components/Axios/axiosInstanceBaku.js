import axios from 'axios'; 

const instanceforBaku= axios.create(
    {
        baseURL: 'http://api.openweathermap.org/data/2.5/forecast?q=Baku,az&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40'
    } );

 export default instanceforBaku; 