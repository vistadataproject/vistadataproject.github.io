---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS VALIDATE AND SIGN 

 property | value 
--- | --- 
 label | OOPS VALIDATE AND SIGN
 tag | SETSIGN
 routine | [OOPSGUI1](http://code.osehra.org/dox/Routine_OOPSGUI1_source.html)
 return value type | ARRAY
 description | This broker call handles the validation of data prior to a user entering their electronic signature code.  It also validates the electronic signature code and then assures that the users electronic signature code, the date/time of signature, and the users DUZ is filed in the Vista database.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | INPUT | LITERAL | 256 | true | This parameter contains the IEN of the record being filed, the form (CA1 orCA2), and the Field number that will trigger the data validation to be performed on the fields in the form.The format for this parameter is: IEN^FORM^FIELD^WCFLAG. | 
| vs:Input_Parameter-8994_02 | SIGN | LITERAL | 256 | true | This parameter passes in the text to be encrypted, validated, and used as theelectronic signature. | 