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

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ConsultID | LITERAL | 16 | true |  | 
| vs:Input_Parameter-8994_02 | ChangeArray | LIST |  | true |  | 