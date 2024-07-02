/*
Name: Soham Patel, Salvi Patel
Date: April 13, 2024
Group: 7
Course Code : INFT-2202-02
Assignment 4: EJS Templating and MongoDB Atlas Integration
*/

let LOCAL= false;

let HostName, URI;

if(LOCAL)

{
    URI= "mongodb://localhost/HarmonyHub";
    HostName = "localhost";
}
else
{
    URI = "mongodb+srv://Spatel23:Spatel@2310@cluster0.ifbmaqy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\n";
    HostName = "MongoDB Atlas";
}



export {HostName, URI};
export const SessionSecret = "INFt2202SessionSecret"