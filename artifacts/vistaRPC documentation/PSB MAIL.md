---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB MAIL 

 property | value 
--- | --- 
 label | PSB MAIL
 tag | RPC
 routine | [PSBRPCXM](http://code.osehra.org/dox/Routine_PSBRPCXM_source.html)
 return value type | GLOBAL ARRAY
 description | A call is made that allows the GUI to send its' own formatted mailmessage.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PSBCMD | LITERAL | 30 | true | The type of action being attempted:        \CREATE\        \APPEND\        \SUBJECT\        \SENDTO\        \EXECUTE\ | 
| PSBDATA | REFERENCE | 80 | true | The text to be acted on. | 




 Generated on January 11th 2017, 7:15:04 am