---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS GET SUPERVISOR 

 property | value 
--- | --- 
 label | OOPS GET SUPERVISOR
 tag | SUPER
 routine | [OOPSGUI4](http://code.osehra.org/dox/Routine_OOPSGUI4_source.html)
 return value type | ARRAY
 description | This call looks up the Supervisor from the new person file.  The IEN of theclaim is passed in to make sure that the person involved is not the supervisor.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| NAME | LITERAL | 256 | true | This is the name or the partial name of the individual being looked up. | 
| CASESSN | LITERAL | 15 | true | This is the SSN for the Person Involved in the case.  It will be used to assurethat the Supervisor for the case is not the same as the Person Involved. | 