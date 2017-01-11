---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC PHY DASHBD PATIENTS 

 property | value 
--- | --- 
 label | ORRC PHY DASHBD PATIENTS
 tag | EN
 routine | [ORRCDPT](http://code.osehra.org/dox/Routine_ORRCDPT_source.html)
 return value type | GLOBAL ARRAY
 description | This call returns a list of patients with recent activity (new resultsor ADT movements) or items that need attention (tasks that are due orunsigned orders and notes) for the specified user.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200. | 