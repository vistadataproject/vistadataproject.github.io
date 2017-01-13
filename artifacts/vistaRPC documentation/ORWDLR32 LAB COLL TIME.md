---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR32 LAB COLL TIME 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 LAB COLL TIME{:/}
 tag | {::nomarkdown}LABCOLTM{:/}
 routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Is the given time a routine lab collection time for the given location?{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Is this a routine lab collect time for this location?

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Collection Time{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Valid FileMan data/time string to check whether it is a valid labcollect time.{:/} | 
| {::nomarkdown}Location{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to Hospital Location{:/} | 




 Generated on January 13th 2017, 6:44:47 am