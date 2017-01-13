---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCH SAVECOL 

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
 Input Parameters | {::nomarkdown}COL{:/}
 Lines | {::nomarkdown} N NAM,VAL,ORERR<br/> S OK="",NAM=$P(COL,"^"),VAL=$P(COL,"^",2)<br/> D EN^XPAR(DUZ_";VA(200,","ORWCH COLUMNS REPORTS",NAM,VAL,.ORERR)<br/> I ORERR S OK=COL_":"_ORERR{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}COL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Format: ifn^C1,C2,C3,C4,C5,C6 ... Where ifn is the internal number of the report in file 101.24, and the2nd '^' piece is the columns separated by commas.{:/} | 




 Generated on January 13th 2017, 7:15:28 am