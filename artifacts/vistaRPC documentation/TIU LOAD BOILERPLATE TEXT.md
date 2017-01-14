---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU LOAD BOILERPLATE TEXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU LOAD BOILERPLATE TEXT{:/}
 tag | {::nomarkdown}BLRSHELL{:/}
 routine | [TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC will load the boilerplate text associated with the selectedtitle, and execute the methods for any objects embedded in the boilerplatetext.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TITLE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a pointer to the TIU DOCUMENT DEFINITION FILE (#8925.1), whichidentifies the title of the document to be loaded.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the patient for whom the document is being entered.{:/} | 
| {::nomarkdown}VSTRING{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This optional parameter is the visit string, formatted as:HLOC;VISIT_DATE;SVC_CATIt's necessary when objects included in the boilerplate are sensitive to the attributes of the visit (e.g., the object VISIT DATE).{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | BLRSHELL^[TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
 Method comment | Shell for boilerplate RPC
 Input parameters | {::nomarkdown}TITLE<br>DFN<br>VSTR{:/}
 Code | {::nomarkdown}  K ^TMP("TIUBOIL",$J)<br> D BLRPLT(.TIUY,TITLE,DFN,$G(VSTR))<br> K ^TMP("TIUBOIL",$J,0){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}