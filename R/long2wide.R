
long2wide = function (data,type="binary") {
  require(V8)
  library(V8)
  js <- V8::v8(typed_arrays = TRUE)
#js$source(file=system.file("js/underscore-min.js", package="V8"))
  js$source("https://raw.githubusercontent.com/esm-ispm-unibe-ch/dataformatter/master/js/underscore-min.js")
  js$source("https://raw.githubusercontent.com/esm-ispm-unibe-ch/dataformatter/master/js/combinations.js")
  js$source("https://raw.githubusercontent.com/esm-ispm-unibe-ch/dataformatter/master/js/long2wide.js")
  #js$source(file="js/long2wide.js")
  #js$source(file="js/combinations.js")
  result = js$call("longToWide",data,type)
  return (result)
}


