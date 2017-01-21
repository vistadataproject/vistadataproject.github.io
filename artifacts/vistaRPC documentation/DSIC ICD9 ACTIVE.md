---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC ICD9 ACTIVE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC ICD9 ACTIVE{:/}
 tag | {::nomarkdown}ACTICD{:/}
 routine | [DSICDRG](http://code.osehra.org/dox/Routine_DSICDRG_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Verify that an ICD9 code is active as of a certain date{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VICD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the ifn or .01 field value from the DIAGNOSIS file (#80 - ^ICD9){:/} | 
| {::nomarkdown}CDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This date is optional.  It can be <null>, TODAY, NOW, or a internal Fileman format date.  Default value is TODAY.  This date will be used to check if the code was active as of that date. This parameter is not used at this time.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}