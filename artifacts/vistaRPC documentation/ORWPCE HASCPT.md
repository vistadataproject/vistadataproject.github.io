---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE HASCPT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE HASCPT{:/}
 tag | {::nomarkdown}HASCPT{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the passed array with the second piece set to 0 or 1.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORLIST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}This array contains the values that would be present in the 811.1 file's\B\ cross reference.  Since the .01 field of this file is a variablepointer, it should appear as follows:PCE Data Type       Array ValueExam                IEN;AUTTEXAM(Health Factor       IEN;AUTTHF(Immunization        IEN;AUTTIMM(Education Topic     IEN;AUTTEDT(Skin Test           IEN;AUTTSK({:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | HASCPT^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Returns true if there are any mapped CPT Codes
 Input parameters | {::nomarkdown}ORLIST{:/}
 Code | {::nomarkdown}  N IEN,IDX,FOUND<br> S IDX=0<br> F  S IDX=$O(ORLIST(IDX)) Q:'+IDX  D<br> . S FOUND=0<br> . S IEN=$$FIND1^DIC(811.1,"","QX",ORLIST(IDX))<br> . I +IEN S FOUND=+$$GET1^DIQ(811.1,IEN,.05,"I")<br> . S ORY(IDX)=ORLIST(IDX)_"="_FOUND{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}