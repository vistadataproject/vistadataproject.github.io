---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC CPT MOD PAIR 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC CPT MOD PAIR{:/}
 tag | {::nomarkdown}MODP{:/}
 routine | [DSICCPT](http://code.osehra.org/dox/Routine_DSICCPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will check to see if a modifier can be used with a code as of the input date.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the ifn or CPT code name (file 81){:/} | 
| {::nomarkdown}MOD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the ifn or modifier .01 field value from file 81.3{:/} | 
| {::nomarkdown}MFT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter works in conjunction with the MOD parameter.Default value = \E\If MFT=\E\ then MOD parameter is an .01 field value for file 81.3If MFT=\I\ then MOD parameter is an ifn value for file 81.3{:/} | 
| {::nomarkdown}CDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This date is optional.  It can be <null>, TODAY, NOW, or a internal Fileman format date.  Default value is TODAY.  This date will be used to check if the CPT/Modifier pair was acceptable as of that date.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}