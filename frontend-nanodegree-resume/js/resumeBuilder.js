var formattedName = HTMLheaderName.replace("%data%", "Doug Coble");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);