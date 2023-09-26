import axios from "axios";
const URL = "https://zerot-carboncompete-service.azurewebsites.net/api/v1";

export const contactUsReq = async ({
  name,
  email,
  companyname,
  phonenumber,
  message,
}) => {
  try {
    const request = await axios({
      url: `${URL}/contact-us`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        name,
        workEmail: email,
        companyName: companyname,
        phoneNo: phonenumber,
        description: message,
        isActive: true,
      },
    });
    if (request.data.success) {
      return {
        message: "success",
      };
    } else {
      return {
        message: "error",
      };
    }
  } catch (err) {
    console.log(err);
    return {
      message: "error",
    };
  }
};

export const whitepaperDownloadReq = async ({
  name,
  email,
  companyname,
  phonenumber,
  message,
}) => {
  try {
    const request = await axios({
      url: `${URL}/whitepaper`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        name,
        workEmail: email,
        companyName: companyname,
        phoneNo: phonenumber,
        description: message,
        isActive: true,
      },
    });

    if (request.data.success) {
      return {
        message: "success",
        downloadurl: request.data.WhitepaperUrl,
      };
    } else {
      return {
        message: "error",
      };
    }
  } catch (err) {
    console.log(err);
    return {
      message: "error",
    };
  }
};

export const bookDemoReq = async ({
  name,
  email,
  location,
  phonenumber,
  message,
}) => {
  try {
    const request = await axios({
      url: `${URL}/requestdemo`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        name,
        email,
        location,
        phoneNo: phonenumber,
        description: message,
        isActive: true,
      },
    });
    if (request.data.success) {
      return {
        message: "success",
      };
    } else {
      return {
        message: "error",
      };
    }
  } catch (err) {
    console.log(err);
    return {
      message: "error",
    };
  }
};
