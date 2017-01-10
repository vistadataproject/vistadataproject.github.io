---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS ZIP CODE MISMATCH CHECK 

 property | value 
--- | --- 
 label | OOPS ZIP CODE MISMATCH CHECK
 tag | ZIPCHK
 routine | [OOPSGUI8](http://code.osehra.org/dox/Routine_OOPSGUI8_source.html)
 return value type | SINGLE VALUE
 description | This broker call will take the Zip Code and State Name and validate that theZip Code exists and is valid for the State.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DATA | LITERAL | 50 | true | This parameter will contain the Zip Code and the State name to validate in theformat ZIPCODE^STATENAME. The zip code will be validated to ensure that itexists and then will obtain the State from the zip code file and check itagainst the cooresponding State entered by the user. | 