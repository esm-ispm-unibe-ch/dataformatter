
wide2Long = function (data,type="binary") {
  library(V8)
  library(readxl)
  js <- V8::v8(typed_arrays = TRUE)
#js$source(file=system.file("js/underscore-min.js", package="V8"))
  js$source(file = "js/underscore-min.js")
  #js$source(file="js/combinations.js")
  js$source(file="js/wide2Long.js")
  lkj = js$call("wideToLong",data,type)
  return (lkj)
}


