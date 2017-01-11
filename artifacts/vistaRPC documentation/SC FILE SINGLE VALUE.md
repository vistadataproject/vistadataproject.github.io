---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SC FILE SINGLE VALUE 

 property | value 
--- | --- 
 label | SC FILE SINGLE VALUE
 tag | VFILE
 routine | [SCUTBK11](http://code.osehra.org/dox/Routine_SCUTBK11_source.html)
 return value type | SINGLE VALUE
 description | File a single value, similar to DIE stuff.  For those instances wherea single value needs to be filed or changed, and that value is notassociated with a specific component on the client side. ie changinga flag.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| LIST ARRAY | LIST | 512 | true | File, Ien, Field number, and value to be filed. | 