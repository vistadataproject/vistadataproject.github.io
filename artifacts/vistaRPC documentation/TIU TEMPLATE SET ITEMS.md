---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE SET ITEMS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE SET ITEMS{:/}
 tag | {::nomarkdown}SETITEMS{:/}
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC will create or update the items for a Group, Class, or Root.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number of the Group, Class or Root to which the itemsare to be added or modified.{:/} | 
| {::nomarkdown}TIUX{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the list of items to be filed for the entry. It should beformatted as follows: TIUX(SEQ)=IEN of the ITEM in the TEMPLATE file (#8927) e.g., TIUX(1)=172TIUX(2)=173TIUX(3)=174 where the values 172, 173, and 174 are valid pointers to Template fileentries.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SETITEMS^[TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 Method comment | Change ITEMs of a group, class, or root
 Input parameters | {::nomarkdown}TIUDA, TIUX{:/}
 First comment | {::nomarkdown}<pre> Receives:<br/>   TIUDA=IEN of TEMPLATE record<br/>   TIUX(SEQ)=IEN of item<br/> Returns:<br/>   SUCCESS(SEQ)=IEN of item if successful, or<br/>                0^ Explanatory message if not</pre>{:/}
 Code | {::nomarkdown}  N TIUI S TIUI=0<br> D CLRITMS(TIUDA) ; Remove ITEMS<br> F  S TIUI=$O(TIUX(TIUI)) Q:+TIUI'>0  D<br> . N TIUITEM,TIUSUCC<br> . S TIUITEM(.01)=TIUI,TIUITEM(.02)=TIUX(TIUI),TIUSUCC=TIUI<br> . D UPDATE^TIUSRVT1(.TIUSUCC,"""+"_TIUI_","_TIUDA_",""",.TIUITEM)<br> . S SUCCESS(TIUI)=TIUSUCC{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:02 am</p>{:/}