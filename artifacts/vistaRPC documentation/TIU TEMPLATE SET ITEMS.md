---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE SET ITEMS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE SET ITEMS{:/}
 tag | {::nomarkdown}SETITEMS{:/}
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC will create or update the items for a Group, Class, or Root.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number of the Group, Class or Root to which the itemsare to be added or modified.{:/} | 
| {::nomarkdown}TIUX{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the list of items to be filed for the entry. It should beformatted as follows: TIUX(SEQ)=IEN of the ITEM in the TEMPLATE file (#8927) e.g., TIUX(1)=172TIUX(2)=173TIUX(3)=174 where the values 172, 173, and 174 are valid pointers to Template fileentries.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SETITEMS^[TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 Method comment | Change ITEMs of a group, class, or root
 First comment | {::nomarkdown}Receives:<br/>TIUDA=IEN of TEMPLATE record<br/>TIUX(SEQ)=IEN of item<br/>Returns:<br/>SUCCESS(SEQ)=IEN of item if successful, or<br/>0^ Explanatory message if not{:/}
 Input parameters | {::nomarkdown}TIUDA<br/>TIUX{:/}
 Code | ```  N TIUI S TIUI=0
 D CLRITMS(TIUDA) ; Remove ITEMS
 F  S TIUI=$O(TIUX(TIUI)) Q:+TIUI'>0  D
 . N TIUITEM,TIUSUCC
 . S TIUITEM(.01)=TIUI,TIUITEM(.02)=TIUX(TIUI),TIUSUCC=TIUI
 . D UPDATE^TIUSRVT1(.TIUSUCC,"""+"_TIUI_","_TIUDA_",""",.TIUITEM)
 . S SUCCESS(TIUI)=TIUSUCC```




 Generated on January 14th 2017, 7:26:35 am