---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU FIELD SAVE 

 property | value 
--- | --- 
 label | TIU FIELD SAVE
 tag | SAVE
 routine | [TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
 return value type | SINGLE VALUE
 description | Saves a single Template Field


### Method description

 property | value 
--- | --- 
 Method comment | Save Template Field
 Leading comment lines | Input:,TIUDA=IEN of TEMPLATE record,TIUX(SEQ)=IEN of item,Output:,SUCCESS=IEN of item if successful, or,0^ Explanatory message if not

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA |  |  |  | IEN of dialog field, if any | 
| TIUX | LIST |  |  | Data to save in template field | 




Generated on January 11th 2017, 6:34:23 am