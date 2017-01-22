---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV USER DEF DIV 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV USER DEF DIV{:/}
 tag | {::nomarkdown}DIV{:/}
 routine | [DSIVDUZ](http://code.osehra.org/dox/Routine_DSIVDUZ_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will return the default division for a user.  If no default isindicated in the DIVISION multiple, then the return value will be:   1. if the user has only one division, and that division is not     explicitly marked as NO for default division, then return that     division  2. else, if the SITE parameter is passed with a value of 1, then     return the default value for the facility.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}XDUZ{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to file 200 for the user for which to return thedefault division.  The default value is DUZ{:/} | 
| {::nomarkdown}SITE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This boolean flag (1 or 0) will be used if the user has no defaultdivision specified in the DIVISION multiple in file 200.  If no defaultdivision, then return the value from $$SITE^VASITE.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:57 am</p>{:/}