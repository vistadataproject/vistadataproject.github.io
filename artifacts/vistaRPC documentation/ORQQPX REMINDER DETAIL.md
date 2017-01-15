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

 property | value 
 --- | --- 
 Method | REMDET^[ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 Method comment | return detail for a pt's clinical reminder
 First comment | {::nomarkdown}ORY - return array<br/>ORPT - patient DFN<br/>ORIEN - clinical reminder (811.9 ien){:/}
 Input parameters | {::nomarkdown}ORPT<br>ORIEN{:/}
 Code | {::nomarkdown}  K ^TMP("PXRHM",$J)<br> D MAIN^PXRM(ORPT,ORIEN,5)     ; 5 returns all reminder info<br> N CR,I,J,ORTXT S I=1<br> S ORTXT="",ORTXT=$O(^TMP("PXRHM",$J,ORIEN,ORTXT)) Q:ORTXT=""  D<br> .S J=0 F  S J=$O(^TMP("PXRHM",$J,ORIEN,ORTXT,"TXT",J)) Q:J=""  D<br> ..S ORY(I)=^TMP("PXRHM",$J,ORIEN,ORTXT,"TXT",J),I=I+1<br> K ^TMP("PXRHM",$J){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}