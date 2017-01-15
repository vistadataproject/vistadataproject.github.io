---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF PRINT 7079 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF PRINT 7079{:/}
 tag | {::nomarkdown}PRINT{:/}
 routine | [DSIFENA4](http://code.osehra.org/dox/Routine_DSIFENA4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Used to print an existing 7079 from Fee Basis.on error returns-1^error message{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}AUTHIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}DEVICE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pass in the VistA device name used to print the 7079.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}