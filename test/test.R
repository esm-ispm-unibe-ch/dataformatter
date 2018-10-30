Sys.setenv(LANG = "en")
rm(list=ls())
library(readxl)
source("../R/long2wide.R")
source("../R/wide2long.R")

wbin <- read_excel("./acutemania_netwide_multiarm_binary.xls")
wcont <- read_excel("./CPPS_netwide_multiarm_continuous.xls")

outbin = wide2long(wbin,"binary")
print(outbin)
outcont = wide2long(wcont,"continuous")
print(outcont)

