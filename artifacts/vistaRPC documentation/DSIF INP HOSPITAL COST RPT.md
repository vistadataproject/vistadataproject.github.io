---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF INP HOSPITAL COST RPT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF INP HOSPITAL COST RPT{:/}
 tag | {::nomarkdown}COSTRPT{:/}
 routine | [DSIFRPT0](http://code.osehra.org/dox/Routine_DSIFRPT0_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This is an RPC version of the CIVIL HOSPITAL COST REPORT as found in routines FBCHCR anc FBCHCR1.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}BEGDATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Begining Date (Required : FileMan format){:/} | 
| {::nomarkdown}ENDDATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Ending Date (Required : FileMan format){:/} | 
| {::nomarkdown}FBRT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Report Type (Optional : D = Detailed, S = Summary, Default = Summary){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}