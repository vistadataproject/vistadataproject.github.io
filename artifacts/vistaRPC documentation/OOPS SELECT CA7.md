---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS SELECT CA7 

 property | value 
--- | --- 
 label | OOPS SELECT CA7
 tag | CA7LIST
 routine | [OOPSGUIC](http://code.osehra.org/dox/Routine_OOPSGUIC_source.html)
 return value type | GLOBAL ARRAY
 description | This broker call returns a list of valid Request for Compensation claims (CA-7)for the employee or Workers' Comp Specialist.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PERSON | LITERAL | 40 | true | This parameter contains either the employee's name or employee's socialsecurity number.  Using this parameter a list of all the CA-7's for thisindividual will be returned.  | 
| CALL | LITERAL | 20 | true | This parameter contains the file number and the menu that called this brokercall.  The menu the broker is called from helps determine which cases canbe returned in the list.  If from the employee menu, then only cases for thatemployee are included, if from the WC menu, then all the CA-7's for the personwhose name is passed in. | 




 ###### Generated on January 11th 2017, 6:39:43 am