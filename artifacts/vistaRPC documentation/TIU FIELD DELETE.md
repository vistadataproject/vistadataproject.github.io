---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU FIELD DELETE 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD DELETE{:/}
 tag | {::nomarkdown}DELETE{:/}
 routine | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Deletes an entry in the Template Field (8927.1) file.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Call ^DIK to remove a Template Field
 Input Parameters | {::nomarkdown}TIUDA{:/}
 Lines | {::nomarkdown} N DIK,DA<br/> S DA=+TIUDA<br/> D UNLOCK(.TIUY,.TIUDA)<br/> S DIK="^TIU(8927.1," D ^DIK<br/> S TIUY=1{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN of record to delete.{:/} | 




 Generated on January 13th 2017, 7:15:27 am