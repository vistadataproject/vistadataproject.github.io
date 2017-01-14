---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DSIC CPT GET MODIFIER 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC CPT GET MODIFIER{:/}
 tag | {::nomarkdown}MOD{:/}
 routine | [DSICCPT](http://code.osehra.org/dox/Routine_DSICCPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This returns basic information for a MODIFIER, file 81.3{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MOD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the ifn or name of the MODIFIER, file 81.3{:/} | 
| {::nomarkdown}CDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This date is optional.  It can be <null>, TODAY, NOW, or a internal Fileman format date.  Default value is TODAY.  This date will be used to check if the code was active as of that date.{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}