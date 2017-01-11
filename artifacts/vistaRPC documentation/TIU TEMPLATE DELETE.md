---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU TEMPLATE DELETE 

 property | value 
--- | --- 
 label | TIU TEMPLATE DELETE
 tag | DELETE
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | SINGLE VALUE
 description | This RPC will delete orphan entries in the Template file (i.e., onlythose entries that have been removed from any Groups, Classes, Personalor Shared Root entries).


### Method description

 property | value 
--- | --- 
 Method comment | Delete TEMPLATES
 Leading comment lines | Pass TIUDA as array of record numbers to be deleted by reference,SUCCESS will be returned as the actual number of templates deleted

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LIST |  | true | This is a list of records which are to be deleted. | 




Generated on January 11th 2017, 6:34:23 am