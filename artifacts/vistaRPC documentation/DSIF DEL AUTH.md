---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF DEL AUTH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF DEL AUTH{:/}
 tag | {::nomarkdown}DEL{:/}
 routine | [DSIFENA3](http://code.osehra.org/dox/Routine_DSIFENA3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Used to delete an existing authorization in Fee Basis.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}35{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pass in Patient File IEN (file #2) {:/} | 
| {::nomarkdown}AUTHIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}25{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Authorization IEN to be deleted{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}