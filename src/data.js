const link =
  "https://api.nasa.gov/planetary/apod?api_key=Ax9SO2QXENq1c9OdPubQK75wQaMeC8M4YECXUMzg";

async function getData() {
  try {
    const jsonResponse = await fetch(link);
    const response = await jsonResponse.json();
    return response;
  } catch (error) {
    console.error(error);
  }
}
getData();

export default getData;
