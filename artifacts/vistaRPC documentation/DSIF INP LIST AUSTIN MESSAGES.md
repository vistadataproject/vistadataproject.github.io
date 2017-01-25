---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF INP LIST AUSTIN MESSAGES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF INP LIST AUSTIN MESSAGES{:/}
 tag | {::nomarkdown}LISTMESS{:/}
 routine | [DSIFPAY6](http://code.osehra.org/dox/Routine_DSIFPAY6_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Retrieve a list of Austin messages for Pricer adjustments.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FROM DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Date to start from in FM format.{:/} | 
| {::nomarkdown}STOP DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Date to stop listing messages in FM format (today - defaultif not entered).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}