---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SC PRTP 

 property | value 
--- | --- 
 label | SC PRTP
 tag | PRTP
 routine | [SCUTBK1](http://code.osehra.org/dox/Routine_SCUTBK1_source.html)
 return value type | SINGLE VALUE
 description | Returns the currently active staff member for a position.  Send inPosition Ien and date range, returns name and ien from New Personfile.  SC(\IEN\)=ien  SC(\BEGIN\)=begining date for check  SC(\END\)=ending date for check

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPUT ARRAY | LIST | 512 | true | See RPC Description for values | 