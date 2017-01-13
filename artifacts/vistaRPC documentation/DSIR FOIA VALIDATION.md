---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR FOIA VALIDATION 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIR FOIA VALIDATION{:/}
 tag | {::nomarkdown}FOIA{:/}
 routine | [DSIROIRV](http://code.osehra.org/dox/Routine_DSIROIRV_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC will return a global array of all records thkat were looked at for the year end FOIA report.  It will contain the internal request number and patient name/FOIA indicator, and a one for any block on the report that the given request was included on.  It also contains all record that, during the report period, were entered in error or of the type of request/requestor type of an excluded state reporting agency.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}START DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}END DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}DIVISION(S){:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:55:29 am