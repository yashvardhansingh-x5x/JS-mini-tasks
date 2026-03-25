// 🌦️ Weather API
async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "YOUR_API_KEY";

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await res.json();

    if (data.cod === 200) {
      document.getElementById("weatherResult").innerText =
        `${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
    } else {
      document.getElementById("weatherResult").innerText = "City not found!";
    }
  } catch (error) {
    document.getElementById("weatherResult").innerText = "Error fetching data!";
  }
}


async function getQuote() {
    try{
        const res = await fetch("https://api.quotable.io/random");
        const data = await res.json();
        document.getElementById("quote").innerText = `"${data.content}"`;
        document.getElementById("author").innerText = `- ${data.author}`;        
    }
    catch (error){
         document.getElementById("quote").innerText = "Failed to load quote!";
        
    }
    
}