Sys.setenv(LANG = "en")
#rm(list=ls())
wbin <- read_excel("~/Documents/data-formatter/acutemania_netwide_multiarm_binary.xls")
wcont <- read_excel("~/Documents/data-formatter/CPPS_netwide_multiarm_continuous.xls")

outbin = wide2Long(wbin,"binary")
print(outbin)
outcont = wide2Long(wcont,"continuous")
print(outcont)

