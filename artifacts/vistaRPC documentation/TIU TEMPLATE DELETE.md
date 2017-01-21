---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE DELETE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE DELETE{:/}
 tag | {::nomarkdown}DELETE{:/}
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will delete orphan entries in the Template file (i.e., onlythose entries that have been removed from any Groups, Classes, Personalor Shared Root entries).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a list of records which are to be deleted.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DELETE^[TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 Method comment | Delete TEMPLATES
 Input parameters | {::nomarkdown}TIUDA{:/}
 First comment | {::nomarkdown}<pre> Pass TIUDA as array of record numbers to be deleted by reference<br/> SUCCESS will be returned as the actual number of templates deleted</pre>{:/}
 Code | {::nomarkdown}  N TIUI S (SUCCESS,TIUI)=0<br> F  S TIUI=$O(TIUDA(TIUI)) Q:+TIUI'>0  D<br> . N DA<br> . S DA=+TIUDA(TIUI)<br> . I 'DA Q<br> . L -^TIU(8927,DA,0):1 ; Unlock before deleting<br> . ; Quit if the Template is NOT an ORPHAN<br> . I +$O(^TIU(8927,"AD",DA,0)) Q<br> . ; Otherwise, call FileMan to DELETE the record<br> . D ZAP(DA) S SUCCESS=SUCCESS+1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}