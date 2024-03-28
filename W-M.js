
// ajax



    var whetherAPI = new XMLHttpRequest();
    function whether (){
        var ww1 =document.getElementById("weather");
        ww1.classList.toggle("whether2")
        var country =document.getElementById("whether1").value;
        var city = document.getElementById("whether2").value;
        document.getElementById("tittle").innerHTML = country;
        document.getElementById("subtittle").innerHTML = city;
        const url1 = "https://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&appid=0ff40908c9559adaa3dad85d7f690094";
    whetherAPI.open('Get',url1,true );
    whetherAPI.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
                w_data = JSON.parse(whetherAPI.responseText);
                console.log(w_data)
                
                 var feel = w_data.main.feels_like;
                 var description = w_data.weather[0].description;
                 var temp = w_data.main.temp;
                 var visibility = w_data.visibility;
                 var wind1 = w_data.wind.speed;
                 var wind2 = w_data.wind.deg;
                 var humidity = w_data.main.humidity;
                 var pressure = w_data.main.pressure;
               
            
                document.getElementById("icon").innerHTML="humidity : "+ humidity ;
                document.getElementById("temp").innerHTML= "temperature : "+parseInt(temp- 273.15)+"°C";
                document.getElementById("feel").innerHTML="feels_like : "+parseInt(feel- 273.15)+"°C";
                document.getElementById("description").innerHTML ="clouds : "+description;
                document.getElementById("visibility").innerHTML="visibility : "+visibility;
                document.getElementById("wind").innerHTML= "wind : speed : "+wind1  + " "+"  wind : degree : "+wind2;
                document.getElementById("pressure").innerHTML="air pressure : "+ pressure;
            }
        } 
         whetherAPI.send();
    }
    var movieAPI = new XMLHttpRequest();
    function movie (){
        var ww2 =document.getElementById("movie3");
        ww2.classList.toggle("movie3");
        var movie =document.getElementById("movie").value;
     var url3 = "https://www.omdbapi.com/?t="+movie+"&apikey=a8e2dc1a";
    movieAPI.open('Get',url3,true );
    movieAPI.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            var m_data = JSON.parse(movieAPI.responseText);
                console.log(m_data);
   

                            // var
                            var m_poster =m_data.Poster ;
                            var m_genre =m_data.Genre ;
                            var m_tittle = m_data.Title;
                            var m_country = m_data.Country;
                            var m_actor = m_data.Actors;
                            var m_director = m_data.Director;
                            var m_released = m_data.Released;
                            var m_runtime = m_data.Runtime;
                            var m_imdrate = m_data.imdbRating;
                            var m_plot = m_data.Plot;
                            var m_language = m_data.Language;
                            var type = m_data.Type;
                            var box = m_data.BoxOffice;
                            // set
                        document.getElementById("m-released").innerHTML="released date : "+ m_released ;
                        document.getElementById("m-tittle").innerHTML ="tittle : "+ m_tittle
                        document.getElementById("m-img").src= m_poster
                        document.getElementById("m-run").innerHTML= "run time :"+m_runtime;
                        document.getElementById("m-lang").innerHTML="languages :"+ m_language;
                        document.getElementById("m-imdb").innerHTML ="IMDB rating : "+m_imdrate;
                        document.getElementById("m-genre").innerHTML="genre :"+m_genre;
                        document.getElementById("m-season").innerHTML= "type : "+type
                        document.getElementById("m-plote").innerHTML ="description : "+m_plot;
                        document.getElementById("m-director").innerHTML="directors : "+m_director;
                        document.getElementById("m-actor").innerHTML="actors : "+m_actor;
                        document.getElementById("m-box").innerHTML="boxOffice collection : "+box;
                        document.getElementById("m-country").innerHTML="country : "+m_country;
 
            }
        } 
         movieAPI.send();
    }
    var webAPI = new XMLHttpRequest();
    function web (){
        var ww3 =document.getElementById("web");
        ww3.classList.toggle("web")
        var web = document.getElementById("web1").value;
        var sezn = document.getElementById("web2").value;
        var ep = document.getElementById("web3").value;
        const url2 = "https://www.omdbapi.com/?t="+web+"&Season="+sezn+"&Episode="+ep+"&apikey=a8e2dc1a"
    webAPI.open('Get',url2,true );
    webAPI.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
                var wb_data = JSON.parse(webAPI.responseText);
                console.log(wb_data);
       
                var w_poster =wb_data.Poster ;
                var w_genre =wb_data.Genre ;
                var w_tittle = wb_data.Title;
                var w_country = wb_data.Country;
                var W_actor = wb_data.Actors;
                var w_director = wb_data.Director;
                var w_released = wb_data.Released;
                var w_runtime = wb_data.Runtime;
                var w_imdrate = wb_data.imdbRating;
                var w_plot = wb_data.Plot;
                var w_language = wb_data.Language;
                var season = wb_data.Season
                var episode = wb_data.Episode
                // set
            document.getElementById("w-released").innerHTML= "released date : "+w_released ;
            document.getElementById("w-tittle").innerHTML = "tittle : "+w_tittle
            document.getElementById("wb-img").src=w_poster
            document.getElementById("w-run").innerHTML= "run time : "+w_runtime;
            document.getElementById("w-lang").innerHTML= "languages : "+w_language;
            document.getElementById("w-imdb").innerHTML ="IMDB rating : "+w_imdrate;
            document.getElementById("w-genre").innerHTML="genre : "+w_genre;
            document.getElementById("w-season").innerHTML="season no : "+ season;
            document.getElementById("w-episode").innerHTML="episode no :"+episode;
            document.getElementById("w-plote").innerHTML ="description : "+w_plot;
            document.getElementById("w-director").innerHTML="directors :"+w_director;
            document.getElementById("w-actor").innerHTML="actors : "+W_actor;
            document.getElementById("w-country").innerHTML="country : "+w_country;
            

}
        } 
         webAPI.send();
    }

