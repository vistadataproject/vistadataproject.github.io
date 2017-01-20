---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS VALIDATE AND SIGN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS VALIDATE AND SIGN{:/}
 tag | {::nomarkdown}SETSIGN{:/}
 routine | [OOPSGUI1](http://code.osehra.org/dox/Routine_OOPSGUI1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This broker call handles the validation of data prior to a user entering their electronic signature code.  It also validates the electronic signature code and then assures that the users electronic signature code, the date/time of signature, and the users DUZ is filed in the Vista database.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains the IEN of the record being filed, the form (CA1 orCA2), and the Field number that will trigger the data validation to be performed on the fields in the form.The format for this parameter is: IEN^FORM^FIELD^WCFLAG.{:/} | 
| {::nomarkdown}SIGN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter passes in the text to be encrypted, validated, and used as theelectronic signature.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}