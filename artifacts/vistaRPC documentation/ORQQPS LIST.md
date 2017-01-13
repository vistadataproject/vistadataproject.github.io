---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPS LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPS LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORQQPS](http://code.osehra.org/dox/Routine_ORQQPS_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns a list of a patient's medications.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | return pt's condensed medication list
 Leading comment lines | id^nameform^stop date^route^schedule/infusion rate^refills remaining

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient id (DFN) from Patient File (#2).{:/} | 
| {::nomarkdown}START DATE/TIME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Start date/time in FileMan format indicating what date/time to beginlisting medications.{:/} | 
| {::nomarkdown}STOP DATE/TIME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Stop date/time in FileMan format indicating what date/time to end listingmedications.{:/} | 




 Generated on January 13th 2017, 5:52:13 am