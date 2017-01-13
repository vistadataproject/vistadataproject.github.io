---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS SELECT CA7 

 property | value 
--- | --- 
 label | {::nomarkdown}OOPS SELECT CA7{:/}
 tag | {::nomarkdown}CA7LIST{:/}
 routine | [OOPSGUIC](http://code.osehra.org/dox/Routine_OOPSGUIC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This broker call returns a list of valid Request for Compensation claims (CA-7)for the employee or Workers' Comp Specialist.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PERSON{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}40{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains either the employee's name or employee's socialsecurity number.  Using this parameter a list of all the CA-7's for thisindividual will be returned. {:/} | 
| {::nomarkdown}CALL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains the file number and the menu that called this brokercall.  The menu the broker is called from helps determine which cases canbe returned in the list.  If from the employee menu, then only cases for thatemployee are included, if from the WC menu, then all the CA-7's for the personwhose name is passed in.{:/} | 




 Generated on January 13th 2017, 6:15:57 am