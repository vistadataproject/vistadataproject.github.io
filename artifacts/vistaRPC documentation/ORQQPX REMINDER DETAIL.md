---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPX REMINDER DETAIL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX REMINDER DETAIL{:/}
 tag | {::nomarkdown}REMDET{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the details of a clinical reminder.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier from Patient file [#2].{:/} | 
| {::nomarkdown}CLINICAL REMINDER ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Clinical reminder identifier (ien) from PCE REMINDER/MAINTENANCE ITEM file[#811.9].{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | REMDET^[ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 Method comment | return detail for a pt's clinical reminder
 Input parameters | {::nomarkdown}ORPT, ORIEN{:/}
 First comment | {::nomarkdown}<pre> ORY - return array<br/> ORPT - patient DFN<br/> ORIEN - clinical reminder (811.9 ien)</pre>{:/}
 Code | {::nomarkdown}  K ^TMP("PXRHM",$J)<br> D MAIN^PXRM(ORPT,ORIEN,5)     ; 5 returns all reminder info<br> N CR,I,J,ORTXT S I=1<br> S ORTXT="",ORTXT=$O(^TMP("PXRHM",$J,ORIEN,ORTXT)) Q:ORTXT=""  D<br> .S J=0 F  S J=$O(^TMP("PXRHM",$J,ORIEN,ORTXT,"TXT",J)) Q:J=""  D<br> ..S ORY(I)=^TMP("PXRHM",$J,ORIEN,ORTXT,"TXT",J),I=I+1<br> K ^TMP("PXRHM",$J){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}