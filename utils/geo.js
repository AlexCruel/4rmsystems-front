// Geo function for country code
// Using for BX24 business processes
// Service https://ipapi.co/

export const getGeoData = async (data) => {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const geoData = await response.json();

        data.ip = geoData.ip;
        data.countryName = geoData.country_name;
        data.countryCode = geoData.country_code;

        return data;
    } catch (e) {
        return data;
    }
}