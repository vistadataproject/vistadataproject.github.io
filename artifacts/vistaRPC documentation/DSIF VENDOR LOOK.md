---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF VENDOR LOOK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF VENDOR LOOK{:/}
 tag | {::nomarkdown}VENDOR{:/}
 routine | [DSIFENA4](http://code.osehra.org/dox/Routine_DSIFENA4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Used to search for Fee Basis Vendors based on the input of last four numbers, searches Tax ID for all matches on error returns-1^error message {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TAXID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pass in four numbers, these will be used to search for matches in the Tax ID number of the Fee Basis Vendor file{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}