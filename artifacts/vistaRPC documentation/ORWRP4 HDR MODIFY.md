---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWRP4 HDR MODIFY 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP4 HDR MODIFY{:/}
 tag | {::nomarkdown}HDR{:/}
 routine | [ORWRP4](http://code.osehra.org/dox/Routine_ORWRP4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC looks at data returned from the HDR and makes any modificationsnecessary to make the data compatible with CPRS Reports.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Extract/Modify data from the HDR
 Leading comment lines | {::nomarkdown}HANDLE=Remote Broker ID in ^XTMP(HANDLE,"D",<br/>ID=Report ID found in field .02 file 101.24{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}HANDLE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Remote Broker ID needed to find data in ^XTMP(HANDLE,\D\,{:/} | 
| {::nomarkdown}ID {:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Report ID found in field .02 of file 101.24{:/} | 




 Generated on January 13th 2017, 6:24:32 am