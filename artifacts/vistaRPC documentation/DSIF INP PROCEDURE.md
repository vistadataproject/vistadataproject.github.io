---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DSIF INP PROCEDURE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}DSIF INP PROCEDURE{:/}
 tag | {::nomarkdown}PROCLK{:/}
 routine | [DSIFINP1](http://code.osehra.org/dox/Routine_DSIFINP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Pass in procedure number of IEN of procedure (File #80.1) for a description and IEN {:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The procedure code (external format) you wish to lookup (file #80.1).{:/} | 
| {::nomarkdown}DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The date you wish to check the code against code set versioning.{:/} | 




 Generated on January 14th 2017, 7:26:36 am