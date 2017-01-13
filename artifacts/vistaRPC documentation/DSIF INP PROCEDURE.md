---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP PROCEDURE 

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




 Generated on January 13th 2017, 5:52:13 am