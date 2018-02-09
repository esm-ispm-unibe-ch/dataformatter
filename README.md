#dataformatter
R package to format data for meta-analysis

###dependencies
`V8`

###contents
`wide2long` - R wrapper for CINeMA's wideToLong function in js

### wide2long(data,type)
- `data` is the dataset.
- `type`: `"binary"` or `"continuous"`

### long2wide(data,fields)
- `data` is the dataset.
- `fields`: `"binary"` or `"continuous"` or a list of the column names starting
  with study id, i.e. `c("study","treat","r","n")`


###installation
```
install.packages("V8")
install_github("esm-ispm-unibe-ch/dataformatter")
```

###usage
```
library(dataformatter)
longData = readxl("./somedataset.xls")
wideData = long2wide(longData,c("id","t","r","n"))
```
in the above example we defined manually the fields' names, which is the same as
```
wideData = long2wide(longData,"binary")
```
see <a href="http://cinema.ispm.ch/#doc" target="_blank">cinema.ispm.ch/#doc</a> for the default field names.
