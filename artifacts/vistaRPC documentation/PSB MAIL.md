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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PSBCMD | LITERAL | 30 | true | The type of action being attempted:        \CREATE\        \APPEND\        \SUBJECT\        \SENDTO\        \EXECUTE\ | 
| vs:Input_Parameter-8994_02 | PSBDATA | REFERENCE | 80 | true | The text to be acted on. | 