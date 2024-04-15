const url =
  "https://cors-anywhere.herokuapp.com/https://trafficticketlookup.gov.jm/api/traffic-tickets";

export const getData = async (data: {
  trn: String;
  controlNumber: String;
  licenseIssue: String;
  dateOfBirth: String;
  type?: String;
}) => {
  try {
    // https://cors-anywhere.herokuapp.com/https://api.ipify.org?format=json
    const ipAddressResponse = await fetch(
      "https://cors-anywhere.herokuapp.com/https://api.ipify.org?format=json"
    );
    const mappedData = {
      driversLicNo: data.trn,
      controlNo: data.controlNumber,
      origLicIssueate: data.licenseIssue,
      dateOfBirth: data.dateOfBirth,
      ipAddress: ipAddressResponse,
      type: data.type ? data.type : ""
    };
    console.log(mappedData);
    if (!ipAddressResponse.ok) {
      throw new Error("Failed to fetch IP address");
    }

    const ipAddressData = await ipAddressResponse.json();
    const ipAddress = ipAddressData.ip;

    const headers = {
      "Content-Type": "application/json",
      "X-Client-IP": ipAddress,
      origin: "null",
      // Add other custom headers if needed
    };

    const response = await fetch(
      url + (mappedData.type ? `/${mappedData.type}` : ""),
      {
        method: "POST",
        headers: headers,
        // body: JSON.stringify(mappedData),
        body: JSON.stringify({
          driversLicNo: "129368555",
          controlNo: "1210304855",
          origLicIssueate: "2019-03-07",
          dateOfBirth: "1999-09-25",
          ipAddress: "185.243.57.224",
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw the error to handle it at the caller level
  }
};
