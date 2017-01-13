---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; NUPA PAST_FUTURE DATE 

 property | value 
--- | --- 
 label | {::nomarkdown}NUPA PAST_FUTURE DATE{:/}
 tag | {::nomarkdown}PF{:/}
 routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns a 1 or a 0 when checking to see if a date is in the past or future, based on $H.  {:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VAR 1{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The date you want to check.  Should be in \7/7/11@12:30:00 PM\ format.{:/} | 
| {::nomarkdown}VAR 2{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Variable should be set to \P\ if you want to see if the date is in the past, or set it to \F\ if you want to see if it's in the future.{:/} | 




 Generated on January 13th 2017, 6:44:48 am