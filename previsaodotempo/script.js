document.querySelector('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault();

    let input = document.querySelector('#searchinput').value;
    if(input !=='')
    {
        clearInfo();
        showWarning('carregando...')

        let url= `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=ef60a79c9c3ca99f2edfad01f9badb3&units=metrics&lang=pt_br`

        let results = await fetch(url);
        let json = await results.json();

        if(json.cod == 200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,

                descri:json.weather[0].description,

            }
            );
        }
        else{
            clearInfo();
            showWarning('não encontramos essa localização');
        }
    }else{
            clearInfo();
        }
}) 

function showInfo(json){
    showWarning('');
    document.querySelector('.resultado').style.display='block';
    document.querySelector('.titulo').innerHTML= `${json.name}, ${json.country}`
    document.querySelector('.temperatura').innerHTML=`${json.temp} <sup>°C</sup>`;
    document.querySelector('.ventoInfo').innerHTML=`${json.speed} <span>km/h</span>`;
    document.querySelector('.tempInfo').innerHTML=`${json.descri}`;
    document.querySelector('.informacoes img').setAttribute('src',`/img/${json.tempIcon}.gif`);

}

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg
}

function clearInfo() {
    showWarning('');
    document.querySelector('.resultado').styly.display = 'none';
}

async function Curitiba(){
    let input = 'Curitiba'
    if(input !=='')
    {
        clearInfo();
        showWarning('carregando...')

        let url= `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=ef60a79c9c3ca99f2edfad01f9badb3&units=metrics&lang=pt_br`

        let results = await fetch(url);
        let json = await results.json();

        if(json.cod == 200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,

                descri:json.weather[0].description,

            }
            );
        }
        else{
            clearInfo();
            showWarning('não encontramos essa localização');
        }
    }else{
            clearInfo();
        }
}
        
  Curitiba();