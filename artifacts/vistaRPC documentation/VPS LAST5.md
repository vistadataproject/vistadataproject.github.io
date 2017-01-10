---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS LAST5 

 property | value 
--- | --- 
 label | VPS LAST5
 tag | LAST5
 routine | [VPSRPC5](http://code.osehra.org/dox/Routine_VPSRPC5_source.html)
 return value type | ARRAY
 description |  Returns a list of patients matching LastNameInitial_Last4SSN based onRestricted Patient List.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | VPSID | LITERAL | 30 | true | String literal containing patient's last name initial and last 4-digits ofthe SSN i.e., \T9999\. | 