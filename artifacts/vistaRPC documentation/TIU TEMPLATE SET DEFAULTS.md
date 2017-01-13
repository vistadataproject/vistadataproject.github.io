---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE SET DEFAULTS 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE SET DEFAULTS{:/}
 tag | {::nomarkdown}SETDFLT{:/}
 routine | [TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Saves Template Default Settings{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Saves Default Templates for the user
 Input Parameters | {::nomarkdown}SETTINGS{:/}
 Lines | ```
 N TIUERR
 D EN^XPAR(DUZ_";VA(200,","TIU DEFAULT TEMPLATES",1,SETTINGS,.TIUERR) ;2263
 S TIUY=1```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SETTINGS{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 




 Generated on January 13th 2017, 6:55:29 am