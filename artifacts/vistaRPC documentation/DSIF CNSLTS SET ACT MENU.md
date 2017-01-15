---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF CNSLTS SET ACT MENU 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF CNSLTS SET ACT MENU{:/}
 tag | {::nomarkdown}SETACTM{:/}
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC returns the permissions a user has for the Consult selected, and what actions they are allowed to take. Cloned from ORQQCN SET ACT MENU{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIFCNS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the Consult IEN you wish to check the user's access for.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}