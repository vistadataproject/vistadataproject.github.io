---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN RESUBMIT 

 property | value 
--- | --- 
 label | ORQQCN RESUBMIT
 tag | RESUBMIT
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | SINGLE VALUE
 description | Allows resubmission of a cancelled consult or procedure request afterediting.  This is a backdoor resubmission, and CPRS will be notified viathe HL7 proocess.


### Method description

 property | value 
--- | --- 
 Method comment | Edit/Resubmit a cancelled consult/procedure request

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ConsultID | LITERAL | 16 | true |  | 
| ChangeArray | LIST |  | true |  | 




Generated on January 11th 2017, 6:34:23 am