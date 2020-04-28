"use strict";


const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});



const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  var commands = ["n!help", "n!ping", "n!github", "n!invite", "n!mimic", "n!welp", "n!rage", "n!eval"];
  var prefix = "n!";
  if (message.content.startsWith(prefix)){
   var args = message.content.split(' ').slice(1);
   var allArgs = args.join(' ');
   var cmd = (message.content.split(' ')[0]).substring(prefix.length).toLowerCase();

   if (cmd === "help"){
     message.channel.send("**The Current List Of Commands:**\n " + commands.join("\n "));
     //console.log("There was a client request");
   }
   
   else if (cmd === "ping"){
     message.channel.send("Pong!");
    //console.log("There was a client request");
   }
   else if (cmd === "developer"){
    message.channel.send("https://github.com/LiamDonohue/Nebula-Discord-Bot");
    //console.log("There was a client request");
   }
   else if (cmd === "invite"){
     message.channel.send("https://discordapp.com/oauth2/authorize?client_id=703378972335145041&permissions=402849799&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Fapi%2Foauth2%2Fauthorize&scope=bot");
     //console.log("There was a client request");
   }





client.login(process.env.token);