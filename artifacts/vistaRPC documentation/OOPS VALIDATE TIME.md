---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS VALIDATE TIME 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS VALIDATE TIME{:/}
 tag | {::nomarkdown}DTVALID{:/}
 routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This broker call will compare two dates (which are part of the input) based on the 3rd input paramater which is a flag indicating which type of compare should be done.  The RESULTS output indicates whether the dates pass (VALIDDATE) or fail (DATE ERROR) the compare.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IDT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the base date/time in external format. In the case of testingwhether one date is before another, this would be the \base\ date. {:/} | 
| {::nomarkdown}PDT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the post date or benchmark date in external format.  In the example of testing if one date is earlier/less than another, this would be the latter date. {:/} | 
| {::nomarkdown}FLAG{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This input parm indicates the type of comparison to be done. -2 means PDT must be <  IDT (The DAY only)-1 means PDT must be <  IDT (The DAY&TIME)0 means PDT must be =  IDT (The DAY&TIME)1 means PDT must be >  IDT (The DAY&TIME)2 means PDT must be > IDT (The DAY only){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}