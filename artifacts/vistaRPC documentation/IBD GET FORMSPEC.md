---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; IBD GET FORMSPEC 

 property | value 
--- | --- 
 label | IBD GET FORMSPEC
 tag | GETFS
 routine | [IBDFBK1](http://code.osehra.org/dox/Routine_IBDFBK1_source.html)
 return value type | ARRAY
 description | This call will return the Form Specification file (as an array) that isused by the scanning software to recognize a form.  Lines longer than255 characters are truncated on the server and flagged with \~~~\indicating the need to concatenate on the client.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FORMTYPE | LITERAL | 20 | true | Input the form type number from the top of the form, (the left mostnumber) | 




 ###### Generated on January 11th 2017, 6:39:42 am