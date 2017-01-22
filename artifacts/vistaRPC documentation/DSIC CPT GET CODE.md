---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC CPT GET CODE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC CPT GET CODE{:/}
 tag | {::nomarkdown}CPT{:/}
 routine | [DSICCPT](http://code.osehra.org/dox/Routine_DSICCPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This returns various information about a specific CPT code.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the CPT, HCPCS, or level III code in either internal or external format.{:/} | 
| {::nomarkdown}CDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This date is optional.  It can be <null>, TODAY, NOW, or a internal Fileman format date.  Default value is TODAY.  This date will be used to check if the code was active as of that date.{:/} | 
| {::nomarkdown}SRC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This Boolean flag (1 or 0) is optional.  Default value is 0.  I SRC=1 then all level III codes to be returned.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a pointer to the PATIENT file.  It is not used at this time.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}