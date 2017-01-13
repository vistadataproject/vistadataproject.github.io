---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWCH SAVECOL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWCH SAVECOL{:/}
 tag | {::nomarkdown}SAVECOL{:/}
 routine | [ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC saves the column width sizes for reports in CPRS for the user.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | save report column sizing information

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}COL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Format: ifn^C1,C2,C3,C4,C5,C6 ... Where ifn is the internal number of the report in file 101.24, and the2nd '^' piece is the columns separated by commas.{:/} | 




 Generated on January 13th 2017, 5:52:13 am