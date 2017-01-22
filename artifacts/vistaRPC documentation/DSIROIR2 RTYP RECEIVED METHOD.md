---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIROIR2 RTYP RECEIVED METHOD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIROIR2 RTYP RECEIVED METHOD{:/}
 tag | {::nomarkdown}RTYP{:/}
 routine | [DSIROIR2](http://code.osehra.org/dox/Routine_DSIROIR2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This is produces the data for the Received Status report. {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SDATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}SDATE - start date.  This is the date to begin pulling data for the report.{:/} | 
| {::nomarkdown}EDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}EDATE - end date.  This is the last date to be used when pulling report data.{:/} | 
| {::nomarkdown}DIVL{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}DIVL  - List of selected divisions - NULL means all divisions{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:57 am</p>{:/}