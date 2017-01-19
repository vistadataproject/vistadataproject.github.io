---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF PAY SCHEDULE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF PAY SCHEDULE{:/}
 tag | {::nomarkdown}PAYSCH{:/}
 routine | [DSIFPAY1](http://code.osehra.org/dox/Routine_DSIFPAY1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Get pay schedule amounts by CPT, Modifiers and Zip code{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CPT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}MODIFIERS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}35{:/} | {::nomarkdown}true{:/} | {::nomarkdown}CPT modifiers (external value), comma deliminted{:/} | 
| {::nomarkdown}DATE OF SERVICE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Entered in standard FM format:  CYYMMDD (time is not allowed here) C - Centuries since 1700 (2000's = 3) YY - two digit year MM - 2 digit month DD - Day Oct 15, 2001 = 3011015  {:/} | 
| {::nomarkdown}ZIP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}VENDOR IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}35{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}TYPE OF SERVICE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}