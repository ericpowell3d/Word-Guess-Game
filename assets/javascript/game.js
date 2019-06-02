$(document).ready(function() {
  var names1 = [
    "geralt", 
    "vesemir", 
    "triss", 
    "lambert", 
    "eskel", 
    "shani", 
    "foltest", 
    "radovid", 
    "dandelion", 
    "abigail", 
    "alvin", 
    "javed", 
    "vincent", 
    "raymond", 
    "professor", 
    "reverend", 
    "siegfried", 
    "savolla", 
    "thaler", 
    "toruviel", 
    "vaska", 
    "velerad", 
    "yaevinn", 
    "zoltan", 
    "berengar", 
    "carmen", 
    "celina", 
    "leuvaarden", 
    "gramps", 
    "ramsmeat", 
    "jeanpierre", 
    "jethro", 
    "kalkstein", 
    "eredin"];
    
  var names2 = [
    "", 
    "", 
    "",
    "",
    ""];
    
  var names3 = [
    "", 
    "", 
    "",
    "",
    ""];
  
  
  // var namesIndex2 = Math.floor(Math.random() * names2.length);
  // var namesIndex3 = Math.floor(Math.random() * names3.length);


  // var nameSelect2 = names2 [nameIndex2];
  // var nameSelect3 = names3 [nameIndex3];

  function Select () {
    var namesIndex1 = Math.floor(Math.random() * names1.length);
    var nameSelect1 = names1 [nameIndex1];
  }

  

  Select();

  console.log(nameSelect1);

});