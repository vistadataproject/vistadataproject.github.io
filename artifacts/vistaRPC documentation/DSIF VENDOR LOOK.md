---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF VENDOR LOOK 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIF VENDOR LOOK{:/}
 tag | {::nomarkdown}VENDOR{:/}
 routine | [DSIFENA4](http://code.osehra.org/dox/Routine_DSIFENA4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Used to search for Fee Basis Vendors based on the input of last four numbers, searches Tax ID for all matches on error returns-1^error message {:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TAXID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pass in four numbers, these will be used to search for matches in the Tax ID number of the Fee Basis Vendor file{:/} | 




 Generated on January 13th 2017, 6:24:32 am