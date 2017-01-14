---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DSIRLTRS DELETE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}DSIRLTRS DELETE{:/}
 tag | {::nomarkdown}DELETE{:/}
 routine | [DSIRLTRS](http://code.osehra.org/dox/Routine_DSIRLTRS_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will delete entries from file 19620.16 (DSIR LOCAL LETTERS) provided the letter specified is not flagged as a \National\ letter.  Certain letter titles are required by the GUI to exist and as such are not to be removed from this file.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Entry Number to file 19620.16 (DSIR LOCAL LETTERS) (Required){:/} | 




 Generated on January 14th 2017, 7:26:36 am