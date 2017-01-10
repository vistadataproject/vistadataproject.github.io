---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS SENSITIVE DATA 

 property | value 
--- | --- 
 label | OOPS SENSITIVE DATA
 tag | SENSDATA
 routine | [OOPSGUI7](http://code.osehra.org/dox/Routine_OOPSGUI7_source.html)
 return value type | SINGLE VALUE
 description | This Broker call is used to pass data to the bulletin routine for supervisorsaccessing sensitive data and not creating an ASISTS case. 

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | SDUZ | LITERAL |  | true | This is the DUZ of the supervisor accessing the Employee's data. | 
| vs:Input_Parameter-8994_02 | EMP | LITERAL |  | true | This is the Employee's name for which the sensitive date has been viewed. | 