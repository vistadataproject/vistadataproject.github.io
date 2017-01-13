---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR SET LOCKED STATUS 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIR SET LOCKED STATUS{:/}
 tag | {::nomarkdown}LOCKFOIA{:/}
 routine | [DSIROI8](http://code.osehra.org/dox/Routine_DSIROI8_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC sets/resets the lock on the annual FOIA report add in numbers.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}EDDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal number of the entry in 19620.3{:/} | 
| {::nomarkdown}LSTAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the lock status 0 = Unlock, 1 = Lock{:/} | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Entry Number - Required{:/} | 




 Generated on January 13th 2017, 6:55:29 am