---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS APPROVE SIGN FOR EMPLOYEE 

 property | value 
--- | --- 
 label | OOPS APPROVE SIGN FOR EMPLOYEE
 tag | EN1
 routine | [OOPSGUI8](http://code.osehra.org/dox/Routine_OOPSGUI8_source.html)
 return value type | ARRAY
 description | This broker call will determine whether the individual can approve theWorkers' Comp person being able to sign for the employee if accessed from theSafety or Employee Health menus.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | INPUT | LITERAL | 256 | true | This parameter contains the IEN of the ASISTS record to be evaluated and thecalling menu in the format IEN^CALLING MENU. | 