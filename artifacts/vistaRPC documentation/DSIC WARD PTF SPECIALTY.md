---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC WARD PTF SPECIALTY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC WARD PTF SPECIALTY{:/}
 tag | {::nomarkdown}SPEC{:/}
 routine | [DSICDGW](http://code.osehra.org/dox/Routine_DSICDGW_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}For a ward name (or a pointer to the WARD file), return that ward's  ptf specialty code ^ specialty name ^ specialty service{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}WARD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the name of the ward or a pointer number to the WARD file.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}