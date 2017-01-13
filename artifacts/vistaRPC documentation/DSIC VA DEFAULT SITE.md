---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC VA DEFAULT SITE 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIC VA DEFAULT SITE{:/}
 tag | {::nomarkdown}SITE{:/}
 routine | [DSICVA](http://code.osehra.org/dox/Routine_DSICVA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will return the name and station number for a medical center division.  Optional input parameters are allowed.  However, if not passed then return the data for the primary division (or institution) as of TODAY.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DIV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}6{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a pointer to the medical center division file (#40.8).  If it is not passed then return data for the primary division as of that date.{:/} | 
| {::nomarkdown}DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This optional Fileman date only will be used to return division data of of that date.  Default value if not passed is TODAY.{:/} | 




 Generated on January 13th 2017, 6:15:57 am