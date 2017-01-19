---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU FIELD DELETE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD DELETE{:/}
 tag | {::nomarkdown}DELETE{:/}
 routine | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Deletes an entry in the Template Field (8927.1) file.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN of record to delete.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DELETE^[TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 Method comment | Call ^DIK to remove a Template Field
 Input parameters | {::nomarkdown}TIUDA{:/}
 Code | {::nomarkdown}  N DIK,DA<br> S DA=+TIUDA<br> D UNLOCK(.TIUY,.TIUDA)<br> S DIK="^TIU(8927.1," D ^DIK<br> S TIUY=1{:/}


### CPRS

[Templates/rTemplates.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}