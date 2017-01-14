---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE DELETE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE DELETE{:/}
 tag | {::nomarkdown}DELETE{:/}
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will delete orphan entries in the Template file (i.e., onlythose entries that have been removed from any Groups, Classes, Personalor Shared Root entries).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a list of records which are to be deleted.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DELETE^[TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 Method comment | Delete TEMPLATES
 First comment | {::nomarkdown}Pass TIUDA as array of record numbers to be deleted by reference<br/>SUCCESS will be returned as the actual number of templates deleted{:/}
 Input parameters | {::nomarkdown}TIUDA{:/}
 Code | ```  N TIUI S (SUCCESS,TIUI)=0
 F  S TIUI=$O(TIUDA(TIUI)) Q:+TIUI'>0  D
 . N DA
 . S DA=+TIUDA(TIUI)
 . I 'DA Q
 . L -^TIU(8927,DA,0):1 ; Unlock before deleting
 . ; Quit if the Template is NOT an ORPHAN
 . I +$O(^TIU(8927,"AD",DA,0)) Q
 . ; Otherwise, call FileMan to DELETE the record
 . D ZAP(DA) S SUCCESS=SUCCESS+1```




 Generated on January 14th 2017, 7:26:35 am