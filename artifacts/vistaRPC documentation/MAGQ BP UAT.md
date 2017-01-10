---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ BP UAT 

 property | value 
--- | --- 
 label | MAGQ BP UAT
 tag | UAT
 routine | [MAGQBUT5](http://code.osehra.org/dox/Routine_MAGQBUT5_source.html)
 return value type | SINGLE VALUE
 description | This procedure validates the BP Server task assignments and rebuilds the content of the dummy BP Server, \Unassigned Tasks\ with the tasks that are not currently assigned to a BP server.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PLACE | LITERAL | 4 | true | This is the reference to the Site Parameter file to which the BP Servers are assigned. | 