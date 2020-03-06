// 7.1-exercise.js
//
// Vue bindings
// 

var llamaAlpaca = new Vue({
  el: "#llamaAlpaca",
  data: {
//data for style binding (make first table column bold)
    myBold: {
      fontWeight: 'bold'
    },
//data for class binding (table row striping)
    myDarkRow: 'darkrow',
//data for attribute bindings (3 hyperlinks)
    wikiLlama: "https://en.wikipedia.org/wiki/Llama",
    wikiAlpaca: "https://en.wikipedia.org/wiki/Alpaca",
    mySource: "https://modernfarmer.com/2015/09/difference-between-llama-and-alpaca/"
  }
});