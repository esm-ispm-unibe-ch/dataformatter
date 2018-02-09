Sys.setenv(LANG = "en")
#rm(list=ls())
library(readxl)
wbin <- read_excel("./acutemania_netwide_multiarm_binary.xls")
wcont <- read_excel("./CPPS_netwide_multiarm_continuous.xls")

outbin = wide2Long(wbin,"binary")
print(outbin)
outcont = wide2Long(wcont,"continuous")
print(outcont)

