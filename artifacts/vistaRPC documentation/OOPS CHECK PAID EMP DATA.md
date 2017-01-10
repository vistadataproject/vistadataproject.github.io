---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS CHECK PAID EMP DATA 

 property | value 
--- | --- 
 label | OOPS CHECK PAID EMP DATA
 tag | VALEMP
 routine | [OOPSGUI1](http://code.osehra.org/dox/Routine_OOPSGUI1_source.html)
 return value type | SINGLE VALUE
 description | This broker call checks to make sure that if the PERSONNEL STATUS (field #2)is an employee and the Pay Plan is equal to \OT\ that the Grade (#16), Step(#17), and Retirement (#60) fields contain valid responses.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 25 | true | The input parameter, IEN, contains the record identifier for the ASISTS claimthat is being validated. | 
| vs:Input_Parameter-8994_02 | INPUT | LITERAL | 25 | true | Parameter INPUT is the FORM name and IEN of OOPS(2260 claim number that needsto be checked. The input format is:FORM^IEN | 