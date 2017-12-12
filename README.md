#dataformatter
R package to format data for meta-analysis

###dependencies
`V8`

###contents
`wide2long` - R wrapper for CINeMA's wideToLong function in js

### wide2long(data,type)
- `data` is the dataset.
- `type`: `"binary"` or `"continuous"`


###installation
```
install.packages("V8")
install_github("esm-ispm-unibe-ch/dataformatter")
```

###usage
```
library(dataformatter)
longData = readxl("./somedataset.xls")
wideData = wide2long(longData,"binary")
```

