---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU FIELD SAVE 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD SAVE{:/}
 tag | {::nomarkdown}SAVE{:/}
 routine | [TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Saves a single Template Field{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Save Template Field

 Leading comment lines | {::nomarkdown}Input:
TIUDA=IEN of TEMPLATE record
TIUX(SEQ)=IEN of item
Output:
SUCCESS=IEN of item if successful, or
0^ Explanatory message if not{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} |  |  |  | {::nomarkdown}IEN of dialog field, if any{:/} | 
| {::nomarkdown}TIUX{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Data to save in template field{:/} | 




 Generated on January 13th 2017, 6:15:57 am