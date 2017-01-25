---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF DEMOG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF DEMOG{:/}
 tag | {::nomarkdown}DEMOG{:/}
 routine | [DSIFENA1](http://code.osehra.org/dox/Routine_DSIFENA1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Pass in IEN of Patient file, return a list of Patient Demographics. Returns an array of demographic data or -1^error message (usually \Invalid Patient selection\){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pass in Patient File IEN (file #2) {:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}