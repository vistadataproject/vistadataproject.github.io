---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPX REMINDER DETAIL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX REMINDER DETAIL{:/}
 tag | {::nomarkdown}REMDET{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the details of a clinical reminder.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return detail for a pt's clinical reminder
 Input Parameters | {::nomarkdown}ORPT<br/>ORIEN{:/}
 Lines | ```{::nomarkdown} K ^TMP("PXRHM",$J)<br/> D MAIN^PXRM(ORPT,ORIEN,5)     ; 5 returns all reminder info<br/> N CR,I,J,ORTXT S I=1<br/> S ORTXT="",ORTXT=$O(^TMP("PXRHM",$J,ORIEN,ORTXT)) Q:ORTXT=""  D<br/> .S J=0 F  S J=$O(^TMP("PXRHM",$J,ORIEN,ORTXT,"TXT",J)) Q:J=""  D<br/> ..S ORY(I)=^TMP("PXRHM",$J,ORIEN,ORTXT,"TXT",J),I=I+1<br/> K ^TMP("PXRHM",$J)```{:/}
 Leading comment lines | {::nomarkdown}ORY - return array<br/>ORPT - patient DFN<br/>ORIEN - clinical reminder (811.9 ien){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier from Patient file [#2].{:/} | 
| {::nomarkdown}CLINICAL REMINDER ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Clinical reminder identifier (ien) from PCE REMINDER/MAINTENANCE ITEM file[#811.9].{:/} | 




 Generated on January 13th 2017, 7:11:26 am