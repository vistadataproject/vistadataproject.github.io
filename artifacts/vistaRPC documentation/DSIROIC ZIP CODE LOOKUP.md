---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIROIC ZIP CODE LOOKUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIROIC ZIP CODE LOOKUP{:/}
 tag | {::nomarkdown}ZIP{:/}
 routine | [DSIROIC](http://code.osehra.org/dox/Routine_DSIROIC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Looks up location information, city, state, and county based on inputted zip code.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PCODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}PCODE - required - 5 or 9 digit zip code - must be a string{:/} | 
| {::nomarkdown}ACTDATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}ACTDATE - optional - Fileman date for which the zip code must have beenactive - default is to ignore date sndn return all.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}