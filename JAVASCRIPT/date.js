async function call_time() {
    const response = await fetch("https://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires")
    .then(response => response.json());
    console.log(response)
    document.getElementById("fecha").innerHTML = response.datetime.split('T')[0];
}
